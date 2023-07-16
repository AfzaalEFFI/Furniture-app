import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "react-native-vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
const Height = Dimensions.get("screen").height;
const Width = Dimensions.get("screen").width;

const Header = ({ isShowInput, setisShowInput }) => {
  const navigation = useNavigation();
  const handleShowInput = () => {
    setisShowInput(!isShowInput);
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-circle" style={styles.icon} />
      </Pressable>
      <TouchableOpacity onPress={handleShowInput}>
        <Ionicons name="search" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Width * 0.05,
    paddingVertical: Height * 0.02,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  icon: {
    fontSize: Height * 0.03,
  },
});
