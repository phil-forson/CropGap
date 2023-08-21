import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function SellerDisplayPage() {
  return (
    <View style={styles.container}>
      <View>
        <Text> Seller Product Card</Text>
      </View>

      <View style={styles.c}>
        <View>
          <Image
            source={require("../assets/Images/CheckoutCardImage.png")}
            style={styles.cart}
          />
        </View>
      </View>

      <View style={styles.checkoutCard}>
        <View style={styles.middlesection}>
          <View style={styles.historydata}>
            <Text style={styles.bolden}>Tilapia</Text>
            <Text style={styles.totalprice}> per 5kg</Text>
          </View>

          <Text style={styles.state}>120 remaining</Text>
          <View style={styles.prices}>
            <View>
              <Text style={styles.moreDetails}>$3.4</Text>
            </View>
            <View>
              <Text style={styles.discounted}>$5.0</Text>
            </View>
            <View style={styles.history}>
              <MaterialCommunityIcons
                name="arrow-right-circle"
                size={38}
                color="green"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    marginLeft: 7,
  },
  cart: {
    borderWidth: 20,
    marginHorizontal: 5,
    borderRadius: 5,
    height: 180,
    width: 180,
    resizeMode: "cover",
    marginTop: 0,
  },
  c: {
    flexDirection: "row",
  },
  checkoutCard: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#EFEFEF",
    borderColor: "#F4F4F4",
    height: 90,
    width: 183,
    marginHorizontal: 3,
    flexDirection: "row",
    marginTop: -70,
  },
  historydata: {
    flexDirection: "row",
  },
  bolden: {
    fontWeight: "bold",
    fontSize: 16,
    paddingHorizontal: 0,
  },
  state: {
    backgroundColor: "#FAFFDD",
    borderRadius: 10,
    color: "#7E7200",
    textAlign: "center",
    width: 130,
    borderColor: "#FAFFDD",
  },
  moreDetails: {
    color: "#007E23",
    marginTop: 8,
    fontSize: 19,
    textAlign: "justify",
  },
  history: {
    marginLeft: 55,
  },

  totalprice: {
    color: "#7F8184",
    textAlign: "right",
  },
  middlesection: {
    padding: 4,
  },
  quantity: {
    marginRight: 0,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  boldenquantity: {
    fontWeight: "bold",
    fontSize: 16,
    paddingHorizontal: 4,
  },
  prices: {
    flexDirection: "row",
  },
  discounted: {
    color: "#007E23",
    marginTop: 8,
    marginLeft: 5,
    fontSize: 13,
    textDecorationLine: "line-through",
  },
});
