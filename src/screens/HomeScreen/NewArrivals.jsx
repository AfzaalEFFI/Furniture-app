import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Recommended from "../../data/Recommended";
import { useNavigation } from "@react-navigation/native";

const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;

const NewArrivals = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{ paddingHorizontal: Width * 0.012, paddingVertical: 12 }}
        onPress={() => navigation.navigate("productScreen")}
      >
        {/* Product Image */}
        <View style={styles.arrivalCard}>
          <Image source={item.image} style={styles.image} />
        </View>

        {/* Product Info Container */}
        <View style={styles.productInfoContainer}>
          {/* Product Name */}
          <Text style={styles.productName}>{item.name}</Text>

          {/*Total Products*/}
          <Text style={styles.productPrice}>{item.total} Products</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.newArrivalsContainer}>
      {/* New Arrivals Title */}
      <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
        <Text style={styles.arrivalTitle}>New Arrivals</Text>
      </View>

      <FlatList
        data={Recommended}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default NewArrivals;

const styles = StyleSheet.create({
  newArrivalsContainer: {
    marginBottom: Height * 0.091,
  },
  arrivalTitle: {
    fontFamily: "Montserrat_Bold",
    paddingHorizontal: Width * 0.032,
    fontSize: Height * 0.02,
    paddingVertical: Height * 0.014,
    textTransform: "capitalize",
  },
  arrivalCard: {
    width: Width * 0.4,
    height: Height * 0.23,
    borderRadius: 8,
    shadowColor: "#707070",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    marginHorizontal: 10,
    overflow: "hidden",
  },
  productInfoContainer: {
    paddingHorizontal: 15,
    backgroundColor: "#FDFDFD",
    position: "absolute",
    width: "90%",
    bottom: Height * 0.011,
    alignSelf: "center",
    borderTopLeftRadius: Height * 0.01,
    borderTopRightRadius: Height * 0.01,
    opacity: 0.8,
    zIndex: 100,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  productName: {
    fontFamily: "Montserrat_ExtraBold",
    fontSize: Height * 0.018,
    textTransform: "capitalize",
    paddingVertical: Height * 0.004,
    // fontWeight: "900",
  },
  productPrice: {
    fontFamily: "Montserrat_ExtraBold",
    fontSize: Height * 0.017,
    textTransform: "capitalize",
    paddingVertical: Height * 0.004,
  },
  set: {
    fontFamily: "Montserrat_Regular",
    fontSize: Height * 0.015,
    textTransform: "capitalize",
  },
  seeAll: {
    fontFamily: "Montserrat_Regular",
    alignSelf: "center",
    right: Width * 0.07,
    fontSize: Height * 0.016,
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
});
