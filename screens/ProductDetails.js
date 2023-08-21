import React, { useMemo } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { AntDesign } from "@expo/vector-icons";

export default function ProductDetails({ navigation }) {
  const bottomSheetRef = React.createRef();

  const openBottomSheet = () => {
    bottomSheetRef.current.expand();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openBottomSheet}>
        <Text>Show Bottom Sheet</Text>
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        index={0} // Initial index, 0 is collapsed
        snapPoints={["50%"]} // Define snap points
      >
        <View style={styles.bottomSheetContent}>
          <View style={styles.headings}>
            <View>
              <Text style={styles.header}>Cat Fish</Text>
            </View>
            <View>
              <Text style={styles.subheader}> per 5kg</Text>
            </View>
          </View>
          <View style={styles.horizontalLine} />
          <View>
            <Text style={styles.details}>Product Details / Description</Text>
          </View>
          <View style={styles.horizontalLine2} />

          <View style={styles.info}>
            <Text style={styles.subheader}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis dolore eu fugiat
              nulla pariatur.
              <TouchableOpacity onPress={() => navigation.navigate("XXX")}>
                <Text style={styles.readmore}>Read more</Text>
              </TouchableOpacity>
            </Text>

            <View style={styles.horizontalLine3} />
          </View>
        </View>
        <View style={styles.wrap}>
          <View>
            <Text style={styles.header}>$10.00</Text>
          </View>
          <View style={styles.quantity}>
            <TouchableOpacity>
              <AntDesign name="minussquareo" size={26} color="#EA5555" />
            </TouchableOpacity>
            <Text style={styles.boldenquantity}> 3 </Text>

            <View style={styles.quantity}>
              <TouchableOpacity>
                <AntDesign name="plussquareo" size={26} color="green" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("MyCart")}
        >
          <Text style={styles.buttonText}>Add To Cart</Text>
        </TouchableOpacity>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomSheetContent: {
    backgroundColor: "white",
    padding: 16,
    height: "50%", // Adjust the height to fill about half of the screen
  },
  headings: {
    flexDirection: "row",
  },
  readmore: {
    color: "green",
    fontSize: 14,
  },
  header: {
    fontSize: 19,
    fontWeight: "500",
  },
  subheader: {
    color: "#7F8184",
    fontSize: 14,
    flexWrap: "wrap",
  },
  horizontalLine: {
    height: 2, // Adjust the height as needed
    width: "98%", // Set to 80% of the screen width
    backgroundColor: "#EAEAEA", // Gray color (or any other color you prefer)
    alignSelf: "center", // Center the line horizontally
    marginTop: 12,
  },
  horizontalLine2: {
    height: 2, // Adjust the height as needed
    width: "98%", // Set to 80% of the screen width
    backgroundColor: "#EAEAEA", // Gray color (or any other color you prefer)
    alignSelf: "center", // Center the line horizontally
    marginTop: 4,
    marginBottom: 15,
  },
  horizontalLine3: {
    height: 2, // Adjust the height as needed
    width: "98%", // Set to 80% of the screen width
    backgroundColor: "#EAEAEA", // Gray color (or any other color you prefer)
    alignSelf: "center", // Center the line horizontally
    marginVertical: 10,
  },

  button: {
    backgroundColor: "#007E23",
    borderRadius: 10,
    marginTop: 50,
    marginHorizontal: 20,
  },
  buttonText: {
    textAlign: "center",
    paddingBottom: 10,
    paddingTop: 10,
    color: "white",
    fontSize: 18,
  },
  details: {
    color: "#7F8184",
    fontSize: 18,
    marginVertical: 8,
  },
  quantity: {
    marginRight: 0,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  boldenquantity: {
    fontWeight: "bold",
    fontSize: 18,
    paddingHorizontal: 4,
  },
  wrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginTop: 50,
  },
});
