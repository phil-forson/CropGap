import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ProductCard() {
  return (
    <View style={styles.container}>
      {/* <View>
      <Text>Checkout Card</Text>
    </View> */}

      <View style={styles.checkoutCard}>
        <View style={styles.cart}>
          <Image source={require("../assets/Images/CheckoutCardImage.png")} />
        </View>
        <View>
          <View style={styles.historydata}>
            <Text style={styles.bolden}>Tilapia</Text>
            <Text style={styles.totalprice}> per kg</Text>
          </View>

          <Text style={styles.state}>5 to 7 mins</Text>

          <Text style={styles.moreDetails}>$3.4</Text>
        </View>

        <View style={styles.history}>
          <Text style={styles.totalprice}>$12.20</Text>
          <View>
            <View style={styles.quantity}>
              <AntDesign name="plussquareo" size={24} color="black" />
              <Text style={styles.bolden}> 3 </Text>
              <AntDesign name="minussquareo" size={24} color="black" />
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
  },
  checkoutCard: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#EFEFEF",
    borderColor: "#7F8184",
    height: 90,
    marginHorizontal: 13,
    flexDirection: "row",
    marginTop: 20,
  },
  historydata: {
    flexDirection: "row",
  },
  bolden: {
    fontWeight: "bold",
    fontSize: 16,
  },
  state: {
    backgroundColor: "#FAFFDD",
    borderRadius: 10,
    color: "#7E7200",
    textAlign: "center",
    width: 100,
    borderolor: "#FAFFDD",
  },
  moreDetails: {
    color: "#007E23",
    marginTop: 8,
    fontSize: 17,
    textAlign: "justify",
  },
  history: {
    justifyContent: "space-around",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  quantity: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  totalprice: {
    color: "#7F8184",
  },
});
