import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TextInputBase,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import ProductCard from "./ProductCard";
//  THIS PAGE IS NOT BEING USED AT THE MOMENT BUT RATHER
//  COMPANY.JS IS BEING USED IN PLACE OF THIS
//  SO IGNORE THIS PAGE.

export default function CompanyPage({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.search}
          onChangeText={(text) => console.log(text)}
          placeholder="search"
        />
        <View style={styles.wrap}>
          <View style={styles.farmname}>
            <Text>Fish Farming</Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.viewall}
              onPress={() => console.log("navigation")}
            >
              <Text>View all</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={[styles.pastClassesContainer]}
        data={pastClasses ?? []}
        renderItem={({ item }) => (
          <ProductCard courseClass={item} navigation={navigation} />
        )}
        keyExtractor={(courseClass) => courseClass.classId}
        ItemSeparatorComponent={() => (
          <View style={[{ paddingRight: 30 }]}></View>
        )}
      />
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
  search: {
    borderRadius: 10,
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 100,
    paddingLeft: 10,
    fontSize: 14,
    borderColor: "#777777",
  },
  viewall: {
    color: "#777777",
  },
  wrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  navbar: {
    flexDirection: "row",
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
