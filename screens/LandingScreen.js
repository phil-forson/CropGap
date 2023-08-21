import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useEffect } from "react";

const LandingScreen = ({ navigation }) => {
  useEffect(() => {
    console.log("landing");
  }, []);
  const height = Dimensions.get("screen").height;
  const width = Dimensions.get("screen").width;
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/Images/Landing.png")}
        style={[
          styles.imageContainer,
          {
            height: height,
            width: width,
          },
        ]}
      >
        <View style={[styles.overlay]}>
          <View>
            <Text style={styles.Ftext}>Go the Green way</Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.Ktext}>
              Beauty blooms in the heart as well as garden
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Signup")}
            >
              <Text style={styles.Stext}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    resizeMode: "contain",
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    color: "red",
    paddingBottom: 100,
  },
  Ftext: {
    fontSize: 38,
    fontWeight: "700",
    color: "white",
  },
  Ktext: {
    fontSize: 17,
    color: "white",
    width: 250,
    textAlign: "center",
  },
  Stext: {
    fontSize: 18,
    color: "white",
  },
  button: {
    backgroundColor: "#D9D9D974",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 35,
    paddingVertical: 15,
    paddingHorizontal: 87,
    borderRadius: 12,
  },
});

export default LandingScreen;
