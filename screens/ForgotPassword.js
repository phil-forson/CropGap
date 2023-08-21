import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";

export default function AuthenticationScreen() {
  return (
    <View>
      <View style={styles.image}>
        <Text></Text>
      </View>
      <View style={styles.password}>
        <Text style={styles.titlep}>Forgot Password</Text>
      </View>
      <View>
        <Text style={styles.belowAuthentext}>
          Verify using link sent to andymusey@gmail.com{" "}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  password: {
    fontSize: 20,
    fontWeight: "700",

    paddingVertical: 10,
    paddingHorizontal: 10,
  },

  titlep: {
    fontWeight: "500",
    fontSize: 25,
    paddingRight: 0,
    textAlign: "center",
  },
  bText: {
    color: "#007E23",
    fontWeight: "500",
    paddingLeft: 20,
  },
  belowAuthentext: {
    paddingBottom: 30,
    paddingTop: 0,
    color: "#777777",
    textAlign: "center",
  },
  image: {
    margin: 200,
  },
});
