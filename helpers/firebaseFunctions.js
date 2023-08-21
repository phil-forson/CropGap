import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth, db } from "../config/config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import uuid from "react-native-uuid";

export const signUp = async (data) => {
  const { email, password } = data;
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await setDoc(doc(db, "users", userCredential.user.uid), {
      uid: userCredential.user.uid,
      email: email,
      fullName: data.fullName,
      accountType: data.accountType,
      phoneNumber: data.phoneNumber,
    });
    await sendEmailVerification(userCredential.user);
  } catch (error) {
    throw error;
  }
};

export const getUserData = async (userId) => {
  const userDocRef = doc(db, "users", userId);
  const userDoc = await getDoc(userDocRef);
  return userDoc.data();
};

export const completeRegistration = async (data, userId) => {
  await setDoc(doc(db, "users", userId), data, { merge: true });
};

export const addFarmItem = async (item) => {
  
  await setDoc(doc(db, "farm-items", item.uid), item);
};
