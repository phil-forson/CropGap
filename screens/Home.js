import { View, Text } from "react-native";
import React from "react";

export default function Home() {
  return (
    <View style={styles.container}>
      <View>
        <TextInput placeholder="Search" />
      </View>
      <View>
        <Text>Fish Farming</Text>
        <Image />
      </View>
      <View>
        <Text>Mango Farming</Text>
        <Image />
      </View>
      <View>
        <Text>Grasscutter</Text>
        <Image />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
