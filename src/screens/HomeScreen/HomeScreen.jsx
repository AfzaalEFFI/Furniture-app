import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Dimensions,
} from "react-native";
import { AntDesign, Ionicons, EvilIcons } from "react-native-vector-icons";
import HeroSection from "./HeroSection";
import BottomeTab from "../../components/BottomeTab";
import { FlatList } from "react-native";
import newArrivals from "../../data/NewArrivals";

const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;

const HomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      {/* Search container */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <AntDesign name="search1" style={styles.icon} />
          <TextInput placeholder="Search Furniture" style={styles.textinput} />
        </View>
        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="notifications-outline" size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <EvilIcons name="user" size={32} />
        </TouchableOpacity>
      </View>

      {/* Hero section */}
      <HeroSection />

      {/* Bottom sheet */}
      <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
        <BottomeTab activeScreen="home" />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  searchContainer: {
    marginVertical: 15,
    width: Width * 0.9,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchBox: {
    backgroundColor: "#F5F5F5",
    flexDirection: "row",
    alignItems: "center",
    width: Width * 0.6,
    paddingVertical: Height * 0.008,
    paddingHorizontal: Width * 0.02,
    borderRadius: Height * 0.1,
    shadowColor: "#707070",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  icon: {
    fontSize: Height * 0.024,
    paddingHorizontal: 10,
  },
  textinput: {
    fontSize: Height * 0.019,
  },
  iconContainer: {
    backgroundColor: "#F5F5F5",
    borderRadius: Height * 0.1,
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
