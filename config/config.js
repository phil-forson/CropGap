// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD52vliZpSGWbjUQdUFVnavD90Hk45kUfM",
  authDomain: "cropgap-df991.firebaseapp.com",
  projectId: "cropgap-df991",
  storageBucket: "cropgap-df991.appspot.com",
  messagingSenderId: "798285110081",
  appId: "1:798285110081:web:aaab101890c68e01c99fc0",
  measurementId: "G-CGCGRED0Y6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
  
  export const auth = getAuth(app);
  
  export const db = getFirestore();
