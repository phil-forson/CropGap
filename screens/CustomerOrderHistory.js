import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function CustomerOrderHistory() {
  const orders = [
    {
      id: 1,
      name: "Cart #4513254 has been completed",
    },
  ];
  const oneOrder = ({ item }) => <Text>{item.name}</Text>;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Order History</Text>
      </View>

      <View style={styles.headings}></View>
      {/* <View>
        <FlatList data={orders} renderItem={oneOrder} />
      </View> */}
      <View>
        <View style={styles.orderCard}>
          <View style={styles.cart}>
            <Feather name="shopping-cart" size={30} color="black" />
          </View>
          <View>
            <View style={styles.historydata}>
              <Text style={styles.bolden}>Cart #4513254</Text>
              <Text> has been completed</Text>
            </View>

            <Text style={styles.state}>In progress</Text>
            <TouchableOpacity
              onPress={() => {
                console.log("Touchable element was tapped");
              }}
            >
              <Text style={styles.moreDetails}>Tap to view more</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.history}>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={24}
              color="black"
              style={{ alignSelf: "flex-end" }}
            />
            <View>
              <Text style={styles.time}>2 hours ago</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 0,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  header: {
    fontWeight: "500",
    fontSize: 22,
    textAlign: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  moreDetails: {
    color: "#007E23",
  },
  headings: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  heading1: {
    fontSize: 17,
  },
  historydata: {
    flexDirection: "row",
  },
  orderCard: {
    flexDirection: "row",
    marginTop: 20,
  },
  history: {
    justifyContent: "space-between",

    // alignItems: "center",
  },
  //   dots: {
  //     justifyContent: "flex-end",
  //   },
  time: {
    fontSize: 12,
  },
  state: {
    backgroundColor: "#FAFFDD",
    borderRadius: 10,
    color: "#7E7200",
    textAlign: "center",
    width: 100,
    borderColor: "#FAFFDD",
  },
  bolden: {
    fontWeight: "bold",
  },
  cart: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8EFDAD",
    borderRadius: 150,
    height: 50,
    width: 10,

    marginHorizontal: 8,
  },
});
