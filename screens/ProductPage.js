import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ProductPage() {
  return (
    <View style={styles.container}>
      <View>
        <Text> Checkout Card</Text>
      </View>

      <View style={styles.checkoutCard}>
        <View>
          <Image
            source={require("../assets/Images/CheckoutCardImage.png")}
            style={styles.cart}
          />
        </View>
        <View style={styles.middlesection}>
          <View style={styles.historydata}>
            <Text style={styles.bolden}>Tilapia</Text>
            <Text style={styles.totalprice}> per kg</Text>
          </View>

          <Text style={styles.state}>5 to 7 mins</Text>
          <View style={styles.prices}>
            <View>
              <Text style={styles.moreDetails}>$3.4</Text>
            </View>
            <View>
              <Text style={styles.discounted}>$5.0</Text>
            </View>
          </View>
        </View>

        <View style={styles.history}>
          <Text style={styles.totalprice}>$12.20</Text>
          <View>
            <View style={styles.quantity}>
              <TouchableOpacity>
                <AntDesign name="minussquareo" size={24} color="#EA5555" />
              </TouchableOpacity>
              <Text style={styles.boldenquantity}> 3 </Text>

              <View style={styles.quantity}>
                <TouchableOpacity>
                  <AntDesign name="plussquareo" size={24} color="green" />
                </TouchableOpacity>
              </View>
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
  cart: {
    borderWidth: 20,
    marginHorizontal: 10,
    borderRadius: 100,
    resizeMode: "cover",
    marginTop: -15,
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
    paddingHorizontal: 0,
  },
  state: {
    backgroundColor: "#FAFFDD",
    borderRadius: 10,
    color: "#7E7200",
    textAlign: "center",
    width: 100,
    borderColor: "#FAFFDD",
  },
  moreDetails: {
    color: "#007E23",
    marginTop: 8,
    fontSize: 19,
    textAlign: "justify",
  },
  history: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginBottom: 10,
  },

  totalprice: {
    color: "#7F8184",
    textAlign: "right",
  },
  middlesection: {
    marginRight: 95,
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
