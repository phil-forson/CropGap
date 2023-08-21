import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function Search() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => console.log(text)}
        placeholder="Search"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  buttonText: {
    textAlign: "center",
    paddingBottom: 10,
    paddingTop: 10,
    color: "white",
  },
  button: {
    backgroundColor: "#007E23",
    borderRadius: 0,
    marginTop: 325,
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
    borderColor: "green",
  },
});
