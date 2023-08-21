import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function Security() {
  return (
    <View>
      <View>
        <Text style={styles.titlep}>Security</Text>
      </View>

      <View>
        <Text style={styles.flow}>Old Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => console.log(text)}
          placeholder="Enter old password"
        />
      </View>
      <View>
        <Text style={styles.flow}>New Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => console.log(text)}
          placeholder="Enter new password"
        />
      </View>

      <View>
        <Text style={styles.flow}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => console.log(text)}
          placeholder="Confirm new password"
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("navigation")}
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#777777",
    borderRadius: 10,
  },
  titlep: {
    fontWeight: "500",
    fontSize: 25,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007E23",
  },
  buttonText: {
    textAlign: "center",
    paddingBottom: 10,
    paddingTop: 10,
    color: "white",
  },
  gender: {
    paddingBottom: 20,
  },
  flow: {
    color: "#777777",
    marginTop: 20,
    paddingLeft: 0,
    paddingBottom: 5,
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
  bText: {
    color: "#007E23",
    fontWeight: "500",
  },
  button: {
    backgroundColor: "#007E23",
    marginTop: 170,
  },
  buttonText: {
    textAlign: "center",
    paddingBottom: 10,
    paddingTop: 10,
    color: "white",
  },
});
