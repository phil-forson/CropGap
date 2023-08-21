import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Theme = () => {
  const [selectedOption, setSelectedOption] = useState("Option 1");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.option}
        onPress={() => handleOptionSelect("Option 1")}
      >
        <Text style={styles.optionText}>Option 1</Text>
        <View
          style={[
            styles.radioButton,
            { borderWidth: selectedOption === "Option 1" ? 5 : 2 },
          ]}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={() => handleOptionSelect("Option 2")}
      >
        <Text style={styles.optionText}>Option 2</Text>
        <View
          style={[
            styles.radioButton,
            { borderWidth: selectedOption === "Option 2" ? 5 : 2 },
          ]}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 12,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    justifyContent: "space-between",
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: "#007E23",
  },
};

export default Theme;
