import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

export default function MyCart({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity>
          <Feather name="arrow-left" size={27} color="black" />
        </TouchableOpacity>
        <View>
          <Text style={styles.cart}>My Cart</Text>
        </View>
      </View>
      <View style={styles.uppersection}>
        <View style={styles.logo}>
          <Image
            source={require("../assets/Images/CompanyLogo.png")}
            style={styles.logoImage}
          />
        </View>
        <View style={styles.info}>
          <Text style={styles.header}>Ghana Tilapia Seed Project</Text>
          <View style={styles.subheader}>
            <Text>054 4845 652 | </Text>
            <Text>ghseed@gmail.com</Text>
          </View>
        </View>
      </View>

      <View style={styles.bottompage}>
        <View style={styles.bottomsection}>
          <Text>Discount</Text>
          <Text>-$12.80</Text>
        </View>
        <View style={styles.bottomsection}>
          <Text>Sub-Total</Text>
          <Text>$57.00</Text>
        </View>
        <View style={styles.bottomsectionSeparator}>
          <Text>
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - - - - - - - - - - -{" "}
          </Text>
        </View>
        <View style={styles.bottomsection}>
          <Text style={styles.bolden}>Total</Text>
          <Text style={styles.bolden}> $57.00</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.buttonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 45,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },

  uppersection: {
    borderwidth: 10,
    borderRadius: 15,
    height: 65,
    backgroundColor: "#E3FFE8",
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#007E23",
    borderRadius: 10,
    marginBottom: 120,
    marginTop: 10,
  },
  buttonText: {
    textAlign: "center",
    paddingBottom: 10,
    paddingTop: 10,
    color: "white",
    fontSize: 18,
  },
  // bottompage: {
  //   marginTop: 300,
  // },

  bottomsection: {
    paddingVertical: 5,
    // marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  header: {
    fontSize: 17,
    fontWeight: "bold",
  },
  subheader: {
    marginBottom: 7,
    flexDirection: "row",
  },
  info: {
    justifyContent: "space-around",
  },
  logo: {
    marginHorizontal: 10,
    resizeMode: "contain",
  },
  logoImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  cart: {
    fontSize: 23,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 20,
    marginLeft: 125,
  },
  navbar: {
    flexDirection: "row",
  },
  bottompage: {
    marginTop: 500,
  },
  bolden: {
    fontWeight: "600",
  },
});
