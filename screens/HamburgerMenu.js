import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

export default function HamburgerMenu({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.headercontainer}>
        <View>
          <Text style={styles.farmtitle}>CropGap</Text>
        </View>
        <View>
          <Text style={styles.subtitle}>Andy Musey</Text>
        </View>

        <View>
          <Text style={styles.mail}>andymusey@gmail.com</Text>
        </View>
      </View>

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("navigation")}
        >
          <View style={styles.wrap}>
            <Image source={require("../assets/Images/Theme.svg")} />
            <Text style={styles.buttonText}>Add Farm</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("navigation")}
        >
          <View style={styles.wrap}>
            <Image source={require("../assets/Images/Security.png")} />
            <Text style={styles.buttonText}>Switch Farm</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("navigation")}
        >
          <View style={styles.wrap}>
            <Image source={require("../assets/Images/PrivacyPolicy.png")} />
            <Text style={styles.buttonText}>Farm Management</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("navigation")}
        >
          <View style={styles.wrap}>
            <Image source={require("../assets/Images/FAQs.png")} />
            <Text style={styles.buttonText}>Weather</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("navigation")}
        >
          <View style={styles.wrap}>
            <Image source={require("../assets/Images/Logout.png")} />
            <Text style={styles.buttonText}>Calendar</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("navigation")}
        >
          <View style={styles.wrap}>
            <Image source={require("../assets/Images/Theme.svg")} />
            <Text style={styles.buttonText}>Settings</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("navigation")}
        >
          <View style={styles.wrap}>
            <Image source={require("../assets/Images/Theme.svg")} />
            <Text style={styles.buttonLogout}>Log out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  headercontainer: {
    paddingBottom: 20,
  },
  farmtitle: {
    fontSize: 24,
    paddingBottom: 0,

    fontWeight: "500",
    color: "#007E23",
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 20,

    fontWeight: "500",
  },
  mail: {
    fontSize: 16,
    paddingBottom: 0,

    fontWeight: "500",
    color: "#777777",
    fontWeight: "400",
  },
  button: {
    padding: 10,
  },
  wrap: {
    flexDirection: "row",
  },
  buttonText: {
    paddingLeft: 8,
    fontSize: 17,
    fontWeight: "400",
    color: "#4B4646",
  },
  buttonLogout: {
    paddingLeft: 8,
    fontSize: 17,
    fontWeight: "400",
  },
});
