import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

import Svg, { Circle, Rect, Path } from "react-native-svg";

export default function Settings({ navigation }) {
  const width = Dimensions.get("screen").width;
  return (
    <View style={styles.container}>
      <View style={styles.svg}>
        <Svg
          width="410"
          height="183"
          viewBox="0 0 390 263"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M-100 0H540V252.085C500 242.085 271.719 273.122 194 273C117.05 272.878 -100 242.085 -100 242.085V0Z"
            fill="#E7FFE8"
          />
          <View style={styles.headercontainer}>
            {/* <View>
              <View>
                <Feather
                  name="menu"
                  size={25}
                  color="black"
                  style={styles.hmenu}
                />
              </View>
            </View> */}

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
        </Svg>
      </View>

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("navigation")}
        >
          <View style={styles.wrap}>
            <Feather name="moon" size={24} color="black" />
            <Text style={styles.buttonText}>Theme</Text>
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
            <Text style={styles.buttonText}>Security</Text>
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
            <Text style={styles.buttonText}>Privacy Policy</Text>
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
            <Text style={styles.buttonText}>FAQs</Text>
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
            <Text style={styles.buttonText}>Log out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 50,
    // marginHorizontal: 10,
    paddingVertical: 10,
    // paddingHorizontal: 10,
  },
  headercontainer: {
    paddingBottom: 50,
    paddingHorizontal: 10,
    marginTop: 50,
    marginHorizontal: 10,
  },
  farmtitle: {
    fontSize: 26,
    paddingBottom: 0,
    textAlign: "center",
    fontWeight: "500",
    color: "#007E23",
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 20,

    textAlign: "center",
    fontWeight: "500",
  },
  mail: {
    fontSize: 16,
    paddingBottom: 15,
    textAlign: "center",
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
    fontSize: 16,
    fontWeight: "400",
  },
  svg: {
    marginBottom: 20,
  },
});
