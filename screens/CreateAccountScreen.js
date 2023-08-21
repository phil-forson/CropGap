import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { SelectList } from "react-native-dropdown-select-list";
import { Alert } from "react-native";
import { signUp } from "../helpers/firebaseFunctions";

const emailRegexPattern = "/^[w-.]+@([w-]+.)+[w-]{2,4}$/g";

export default function CreateAccountScreen({ navigation }) {
  const [isSelected, setSelection] = useState(true);

  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [accountType, setAccountType] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdValid, setPwdValid] = useState(false);
  const [pwd2, setPwd2] = useState("");
  const [pwd2Valid, setPwd2Valid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // useEffect(() => {
  //   setEmailValid(emailRegexPattern.test(email));
  // }, [email]);

  useEffect(() => {
    setPwd2Valid(pwd === pwd2);
  }, [pwd, pwd2]);

  // const handleCheckboxChange = () => {
  //   setSelection(!isSelected);
  // };

  const [selected, setSelected] = React.useState("");

  const data = [
    {
      key: "1",
      value: "Customer", //disabled: true },
    },
    { key: "2", value: "Farmer" },
    { key: "3", value: "Agric Company" },
  ];

  const createAccount = async () => {
    if (!fullName || !email || !accountType || !phoneNumber || !pwd) {
      Alert.alert("Enter all details");
      return;
    }
    if (!pwd2Valid) {
      Alert.alert("Passwords do not match");
      return;
    }

    const data = {
      fullName: fullName,
      email: email,
      phoneNumber: phoneNumber,
      accountType: accountType,
      password: pwd,
    };

    if(accountType !== "Customer"){
      navigation.navigate("SignUpCompletion", data)
    }

    else {

      setIsSubmitting(true);
      await signUp(data)
        .then((res) => {
          setIsSubmitting(false);
          navigation.navigate("EmailVerification", data)
        })
        .catch((error) => {
          setIsSubmitting(false);
          Alert.alert("Error", error.message);
        });
    }

  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titlep}>Create an account</Text>
      </View>
      <View>
        <Text style={styles.subtitle}> Enter your details to sign up</Text>
      </View>
      <View>
        <Text style={styles.flow}>Full Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setFullName(text)}
          placeholder="Enter your full name"
        />
      </View>
      <View>
        <Text style={styles.flow}>Email address</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Enter your email"
        />
      </View>

      <View>
        <Text style={styles.flow}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
          placeholder="Enter your phone number"
        />
      </View>

      <View>
        <Text style={styles.flow}>Account Type</Text>

        <SelectList
          setSelected={(val) => setAccountType(val)}
          data={data}
          save="value"
        />
      </View>

      <View>
        <Text style={styles.flow}>Password</Text>
        <TextInput
          style={styles.input}
          value={pwd}
          onChangeText={(text) => setPwd(text)}
          placeholder="Enter your Password"
          secureTextEntry={true}
        />
      </View>
      <View>
        <Text style={styles.flow}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          value={pwd2}
          onChangeText={(text) => setPwd2(text)}
          placeholder="Confirm your Password"
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={createAccount}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <View>
          <Text style={styles.bottomtext}>Already have an account ? </Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.bText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* FINISH PASSWORD */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },

  titlep: {
    fontWeight: "500",
    fontSize: 25,
    textAlign: "left",
    paddingTop: 50,
  },
  subtitle: {
    marginBottom: 5,

    color: "#777777",
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
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
  bText: {
    color: "#007E23",
    fontWeight: "500",
  },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 100,
    paddingLeft: 10,
    fontSize: 14,
    borderColor: "#777777",
  },
  flow: {
    color: "#777777",
    marginTop: 20,
    paddingLeft: 0,
    paddingBottom: 5,
  },
  flowD: {
    textAlign: "center",
  },
  belowconfirm: {
    textAlign: "right",
    paddingTop: 10,
    paddingBottom: 40,
    color: "#777777",
  },
  inputContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
  },
  bottomtext: {
    color: "#777777",
    paddingLeft: 20,
  },
});
