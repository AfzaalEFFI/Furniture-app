import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons, Entypo, AntDesign } from "react-native-vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Dimensions } from "react-native";
import DescriptionDetails from "./DescriptionDetails";

const Height = Dimensions.get("screen").height;
const Width = Dimensions.get("screen").width;

const DescriptionScreen = () => {
  // Get the route and data from navigation
  const route = useRoute();
  const data = route?.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Product Image */}

      <View style={styles.imageContainer}>
        <View style={styles.iconContainer}>
          {/* Go back icon */}
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-circle" style={styles.icon} />
          </TouchableOpacity>
          {/* Shopping bag icon */}
          <TouchableOpacity>
            <Entypo
              name="shopping-bag"
              style={{ ...styles.icon, fontSize: Height * 0.026 }}
            />
          </TouchableOpacity>
        </View>
        {/* Wishlist icon */}
        <View style={styles.wishlistIcon}>
          <AntDesign name="hearto" style={{ fontSize: 20, color: "#fff" }} />
        </View>
        {/* Main product image */}
        <Image source={data.image} style={styles.image} />
      </View>

      {/* Content container */}
      <View style={styles.contentContainer}>
        {/* Product details */}
        <DescriptionDetails data={data} />
      </View>
    </View>
  );
};

export default DescriptionScreen;

const styles = StyleSheet.create({
  // Styles for each section go here
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    resizeMode: "cover",
    height: 500,
    width: 700,
  },
  imageContainer: {
    flex: 0.8,
    overflow: "hidden",
  },
  contentContainer: {
    flex: 0.9,
    backgroundColor: "#fff",
    borderTopRightRadius: Height * 0.03,
    borderTopLeftRadius: Height * 0.03,
    top: Height * -0.04,
  },
  iconContainer: {
    flexDirection: "row",
    position: "absolute",
    zIndex: 100,
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: Width * 0.03,
    paddingVertical: Height * 0.02,
    alignItems: "center",
  },
  icon: {
    fontSize: Height * 0.035,
  },
  wishlistIcon: {
    position: "absolute",
    backgroundColor: "#000",
    right: Width * 0.02,
    zIndex: 100,
    bottom: Height * 0.045,
    borderRadius: Height * 0.1,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
