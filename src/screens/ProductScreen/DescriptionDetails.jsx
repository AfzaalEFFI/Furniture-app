import React from "react";
import { View, StyleSheet, Text, Dimensions, Image } from "react-native";
import { Ionicons, AntDesign } from "react-native-vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const Height = Dimensions.get("screen").height;
const Width = Dimensions.get("screen").width;

const DescriptionDetails = ({ data }) => {
  // Sample stars data
  const stars = [
    { id: 1, name: "star" },
    { id: 2, name: "star" },
    { id: 3, name: "star" },
    { id: 4, name: "star" },
  ];

  console.log(data);

  return (
    <View>
      {/* Product Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{data.name}</Text>
      </View>

      {/* Product Subtitle */}
      <View style={styles.subTitle}>
        <Text style={styles.code}>FG07593093</Text>
        <View style={styles.cartContainer}>
          <Ionicons name="add-outline" style={styles.icon} />
          <Text style={styles.item}>0</Text>
          <AntDesign name="minus" style={styles.icon} />
        </View>
      </View>

      {/* Product Review */}
      <View style={styles.review}>
        <View style={{ flexDirection: "row" }}>
          {/* Render stars */}
          {stars.map((review) => (
            <View key={review.id}>
              <AntDesign name={review.name} style={styles.reviewIcon} />
            </View>
          ))}
          <Text style={styles.reviewTitle}>(260 Review)</Text>
        </View>
        <Text style={styles.stockTitle}>Available in stock</Text>
      </View>

      {/* Product Type */}
      <View style={styles.type}>
        <Text style={styles.size}>Size:</Text>
        <Text style={styles.sizeTitle}>1 seater</Text>
      </View>

      {/* Product Description */}
      <View style={styles.description}>
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.descriptionText}>{data?.description}</Text>
      </View>

      {/* Product Colors */}
      <View style={styles.colorsContainer}>
        <Text style={styles.color}>Colors</Text>
        <View style={{ top: 10, flexDirection: "row" }}>
          {/* Sample color boxes */}
          <View style={{ ...styles.colors, backgroundColor: "#50C878" }} />
          <View style={styles.colors} />
          <View style={{ ...styles.colors, backgroundColor: "#E6E6FA" }} />
          <View style={{ ...styles.colors, backgroundColor: "#008080" }} />
          <View style={{ ...styles.colors, backgroundColor: "#E0115F" }} />
        </View>
      </View>

      {/* Product Price */}
      <View style={styles.priceContainer}>
        <View>
          <Text style={styles.totalPrice}>Total Price</Text>
          <Text style={styles.price}>${data.price}</Text>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.buttonTitle}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DescriptionDetails;

const styles = StyleSheet.create({
  titleContainer: {
    left: Width * 0.04,
    top: Height * 0.02,
  },
  title: {
    fontFamily: "Montserrat_Bold",
    fontSize: Height * 0.02,
    justifyContent: "space-between",
  },
  subTitle: {
    top: Height * 0.025,
    left: Width * 0.04,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  cartContainer: {
    backgroundColor: "#F5F5F5",

    right: Width * 0.12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: Width * 0.22,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: Height * 0.1,
    top: -25,
  },
  icon: {
    fontSize: Height * 0.02,
  },
  item: {
    fontFamily: "Montserrat_Regular",
    fontSize: Height * 0.019,
  },
  review: {
    zIndex: 100,
    // position: "absolute",
    flexDirection: "row",
    top: Height * 0.02,
    left: Width * 0.04,
    justifyContent: "space-between",
  },
  reviewIcon: {
    fontSize: Height * 0.017,
    color: "#EFAA1A",
    marginHorizontal: 2,
  },
  code: {
    fontSize: Height * 0.017,
    fontFamily: "Montserrat_Regular",
  },
  reviewTitle: {
    fontFamily: "Montserrat_Medium",
    marginHorizontal: 6,
    fontSize: Height * 0.015,
  },
  stockTitle: {
    fontFamily: "Montserrat_Bold",
    right: Height * 0.032,
    top: Height * -0.01,
    fontSize: Height * 0.016,
    textTransform: "capitalize",
  },
  type: {
    left: Width * 0.04,
    top: Height * 0.025,
    flexDirection: "row",
    alignItems: "center",
  },
  size: {
    fontFamily: "Montserrat_Regular",
    fontSize: Height * 0.019,
    textTransform: "capitalize",
  },
  sizeTitle: {
    fontFamily: "Montserrat_Medium",
    fontSize: Height * 0.019,
    textTransform: "capitalize",
    paddingHorizontal: 10,
    textTransform: "capitalize",
  },
  description: {
    top: Height * 0.04,
    left: Width * 0.04,
  },
  descriptionTitle: {
    fontFamily: "Montserrat_Medium",
    fontSize: Height * 0.02,
    fontWeight: "700",
  },
  descriptionText: {
    fontFamily: "Montserrat_Regular",
    fontSize: Height * 0.017,
    top: 10,
  },
  colorsContainer: {
    top: Height * 0.068,
    left: Width * 0.04,
  },
  color: {
    fontFamily: "Montserrat_Medium",
    fontSize: Height * 0.02,
    fontWeight: "700",
  },
  colors: {
    width: 30,
    height: 30,
    borderRadius: Height * 0.1,
    backgroundColor: "#87CEEB",
    marginHorizontal: 6,
  },
  priceContainer: {
    // backgroundColor: "red",
    position: "absolute",
    // bottom: -10,
    top: Height * 0.46,
    left: Width * 0.04,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  price: {
    fontSize: Height * 0.02,
    fontFamily: "Montserrat_Bold",
  },
  btn: {
    backgroundColor: "#000",
    right: Width * 0.082,
    top: Height * 0.009,
    width: Width * 0.32,
    alignItems: "center",
    borderRadius: Height * 0.1,
  },
  buttonTitle: {
    color: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontFamily: "Montserrat_Bold",
    fontSize: Height * 0.018,
    textTransform: "capitalize",
  },
  totalPrice: {
    fontFamily: "Montserrat_Regular",
    textTransform: "capitalize",
    fontWeight: "400",
  },
});
