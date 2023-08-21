import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { getWeatherData } from "../services/weather.service";



export default function Weather({ navigation }) {
  useEffect(() => {
    getWeatherData(5.654059768666417, -0.1842114322431313, (data) => {});
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.navbar}>
            <View>
              <Feather
                name="menu"
                size={25}
                color="black"
                style={styles.hmenu}
              />
            </View>

            {/* <View>
              <Text style={styles.farmtitle}>Weather Forecast</Text>
            </View> */}
          </View>
        </View>
        <View>
          <Text style={styles.famname}>Weather Forecast</Text>
        </View>
        <View>
          <Text style={styles.subtitle}>
            For the next few days (including today)
          </Text>
        </View>
        <View style={styles.containerwraper}>
          <View>
          <View>
            <Text style={styles.title}>30C </Text>
          </View>
          <View>
            <Text style={styles.category}>Today</Text>
          </View>
          <View>
            <Text style={styles.date}>Partly Sunny Day</Text>
          </View>
          </View>
          <View style={styles.imagecontainer}>
            <Text style={styles.image}>Image</Text>
          </View>
        </View>
        <View style={styles.containerwraper}>
          <View>
            <Text style={styles.title}>30C </Text>
          </View>
          <View>
            <Text style={styles.category}>Tomorrow</Text>
          </View>
          <View>
            <Text style={styles.date}>Heavily Rainy Day</Text>
          </View>
          <View style={styles.imagecontainer}>
            <Text style={styles.image}>Image</Text>
          </View>
        </View>
        <View style={styles.containerwraper}>
          <View>
            <Text style={styles.title}>30C </Text>
          </View>
          <View>
            <Text style={styles.category}>6th June</Text>
          </View>
          <View>
            <Text style={styles.date}>Partly Sunny Day</Text>
          </View>
          <View style={styles.imagecontainer}>
            <Text style={styles.image}>Image</Text>
          </View>
        </View>
        <View style={styles.containerwraper}>
          <View>
            <Text style={styles.title}>30C </Text>
          </View>
          <View>
            <Text style={styles.category}>6th June</Text>
          </View>
          <View>
            <Text style={styles.date}>Partly Sunny Day</Text>
          </View>
          <View style={styles.imagecontainer}>
            <Text style={styles.image}>Image</Text>
          </View>
        </View>
        <View style={styles.containerwraper}>
          <View>
            <Text style={styles.title}>30C </Text>
          </View>
          <View>
            <Text style={styles.category}>6th June</Text>
          </View>
          <View>
            <Text style={styles.date}>Partly Sunny Day</Text>
          </View>
          <View style={styles.imagecontainer}>
            <Text style={styles.image}>Image</Text>
          </View>
        </View>
        <View style={styles.containerwraper}>
          <View>
            <Text style={styles.title}>30C </Text>
          </View>
          <View>
            <Text style={styles.category}>6th June</Text>
          </View>
          <View>
            <Text style={styles.date}>Partly Sunny Day</Text>
          </View>
          <View style={styles.imagecontainer}>
            <Text style={styles.image}>Image</Text>
          </View>
        </View>
      </ScrollView>
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
  navbar: {
    flexDirection: "row",
    paddingBottom: 5,
  },
  hmenu: {
    paddingTop: 5,
  },
  famname: {
    fontSize: 22,
    fontWeight: "500",
  },
  farmtitle: {
    fontSize: 24,
    paddingBottom: 20,
    paddingLeft: 55,
    textAlign: "center",
    fontWeight: "500",
  },
  imagecontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
  },
  image: {},
  subtitle: {
    color: "#666666",
    fontSize: 15,
    paddingBottom: 5,
  },
  // category: {
  //   borderRadius: 10,
  //   borderColor: "black",
  //   borderWidth: 1,
  //   justifyContent: "right",
  // },
  title: {
    fontSize: 18,
    fontWeight: "500",
  },
  containerwraper: {
    borderWidth: 1,
    borderColor: "#C6C6C6",
    backgrounColor: "white",

    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
    marginVertical: 0,
  },
  date: {
    color: "#666666",
  },
});
