import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { sendEmailVerification } from "firebase/auth";
import useAuth from "../hooks/useAuth";
import { Alert } from "react-native";
import { getUserData } from "../helpers/firebaseFunctions";

export default function AuthenticationScreen({ navigation, route }) {
  const { user } = useAuth();
  const [inputValues, setInputValues] = useState(["", "", "", "", "", ""]);

  const handleChangeText = (text, index) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = text;
    setInputValues(newInputValues);
  };


  const resendVerificationEmail = async () => {
    await sendEmailVerification(user)
      .then(() => {
        Alert.alert("Success", "Email Link sent successfully");
      })
      .catch((err) => Alert.alert("Error", err.message));
  };

  const handleContinue = async () => {
    console.log('user ', user)
      if (route.params.accountType === "Customer") {
        navigation.navigate("CustomerHomePage");
      } else {
        navigation.navigate("SellerDisplayPage")
      }
    
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titlep}>Account Authentication</Text>
      </View>
      <View>
        <Text style={styles.belowAuthentext}>
          A verification link has been sent to {route.params.email}
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <View>
          <TouchableOpacity onPress={resendVerificationEmail}>
            <Text style={styles.bText}>Resend </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.bottomtext}>
            link if you haven’t received one
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 250,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#007E23",
    borderRadius: 10,
    marginTop: 50,
  },
  buttonText: {
    textAlign: "center",
    paddingBottom: 10,
    paddingTop: 10,
    color: "white",
    fontSize: 18,
  },

  input: {
    width: 40,
    height: 40,
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: "center",
    borderColor: "#C6C6C6",
    paddingHorizontal: 25,
  },
  titlep: {
    fontWeight: "500",
    fontSize: 25,
    paddingRight: 0,
  },
  bText: {
    color: "#007E23",
    fontWeight: "500",
    paddingLeft: 20,
  },
  inputContainer: {
    flexDirection: "row",
    textAlign: "center",
    marginTop: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomtext: {
    color: "#777777",
    paddingLeft: 0,
    textAlign: "center",
  },
  belowAuthentext: {
    paddingBottom: 30,
    paddingTop: 0,
    color: "#777777",
  },
});
