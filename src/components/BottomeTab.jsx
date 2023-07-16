import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Entypo, MaterialIcons, Ionicons } from "react-native-vector-icons";

const Height = Dimensions.get("screen").height;
const Width = Dimensions.get("screen").width;

const BottomeTab = ({ activeScreen }) => {
  return (
    <View style={styles.mainContainer}>
      {/* Home Tab */}
      <TouchableOpacity style={styles.iconContainer}>
        <Entypo
          name="home"
          style={activeScreen === "home" ? styles.activeScreen : styles.icon}
        />
        <Text
          style={
            activeScreen === "home" ? styles.activeScreenTitle : styles.title
          }
        >
          Home
        </Text>
      </TouchableOpacity>

      {/* Category Tab */}
      <TouchableOpacity style={styles.iconContainer}>
        <MaterialIcons
          name="category"
          style={
            activeScreen === "category" ? styles.activeScreen : styles.icon
          }
        />
        <Text
          style={
            activeScreen === "category"
              ? styles.activeScreenTitle
              : styles.title
          }
        >
          Category
        </Text>
      </TouchableOpacity>

      {/* Wishlist Tab */}
      <TouchableOpacity style={styles.iconContainer}>
        <Ionicons
          name="heart-circle"
          style={
            activeScreen === "wishlist" ? styles.activeScreen : styles.icon
          }
        />
        <Text
          style={
            activeScreen === "wishlist"
              ? styles.activeScreenTitle
              : styles.title
          }
        >
          Wishlist
        </Text>
      </TouchableOpacity>

      {/* Orders Tab */}
      <TouchableOpacity style={styles.iconContainer}>
        <Entypo
          name="shopping-cart"
          style={activeScreen === "orders" ? styles.activeScreen : styles.icon}
        />
        <Text
          style={
            activeScreen === "orders" ? styles.activeScreenTitle : styles.title
          }
        >
          Orders
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomeTab;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#F5F5F5",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  iconContainer: {
    alignItems: "center",
  },
  title: {
    fontFamily: "Montserrat_Medium",
    fontSize: Height * 0.016,
  },
  icon: {
    fontSize: Height * 0.024,
  },
  activeScreen: {
    fontSize: Height * 0.024,
    color: "#6FAAD5",
  },
  activeScreenTitle: {
    fontFamily: "Montserrat_Medium",
    fontSize: Height * 0.016,
    color: "#6FAAD5",
  },
});
