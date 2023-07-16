import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { Dimensions } from "react-native";

const Height = Dimensions.get("screen").height;
const Width = Dimensions.get("screen").width;
const TextInputCN = ({ placeholder, label }) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput placeholder={placeholder} style={styles.input} />
    </View>
  );
};

export default TextInputCN;

const styles = StyleSheet.create({
  label: {
    fontFamily: "Montserrat_Medium",
    fontWeight: "500",
    fontSize: Height * 0.02,
    marginTop: Height * 0.01,
  },
  input: {
    borderBottomWidth: 0.5,
    opacity: 0.7,
    // marginVertical: Height * 0.005,
  },
});
