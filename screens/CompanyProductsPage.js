import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function CompanyProductsPage() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>CompanyProductsPage</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 10,
  },
});
