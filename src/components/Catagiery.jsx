import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { Ionicons, FontAwesome5 } from "react-native-vector-icons";

const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;

const Catagiery = () => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.iconContainer}>
        <Ionicons name="bed-outline" size={24} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesome5 name="chair" size={32} />
      </TouchableOpacity>
    </View>
  );
};

export default Catagiery;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  iconContainer: {
    backgroundColor: "#DADADA",

    borderRadius: Height * 0.1,
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
