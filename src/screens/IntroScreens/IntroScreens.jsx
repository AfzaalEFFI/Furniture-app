import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Swiper, { Pagination } from "react-native-swiper";
import { Image } from "react-native";
import { Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";

const Height = Dimensions.get("screen").height;
const Width = Dimensions.get("screen").width;

const onboardingData = [
  {
    image: require("../../../assets/chair.jpg"),
    heading: "Transform Your Space",
    description:
      "Discover a world of exquisite furniture designs that elevate your surroundings.",
  },
  {
    image: require("../../../assets/minorchair.jpg"),
    heading: "Visualize Your Dream",
    description:
      "Immerse yourself in our virtual design studio and bring your vision to life.",
  },
  {
    image: require("../../../assets/whitesofa.jpg"),
    heading: "Find Your Perfect Match",
    description:
      "Explore our curated collections and find furniture pieces that resonate with your style.",
  },
];

const IntroScreens = () => {
  return (
    <Swiper
      style={styles.wrapper}
      dotStyle={styles.dot}
      activeDotStyle={styles.activeDot}
      paginationStyle={{
        position: "absolute",
        left: Width * 0.13,
        width: Width * 0.01,
      }}
      nextButton={<Text style={styles.btn}>Next</Text>}
    >
      {onboardingData.map((slide, index) => (
        <View key={index} style={styles.slide}>
          <Image source={slide.image} style={styles.image} resizeMode="cover" />
          <View style={styles.titleContainer}>
            <Text style={styles.heading}>{slide.heading}</Text>
            <Text style={styles.description}>{slide.description}</Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btn}>Skip</Text>
          </TouchableOpacity>
        </View>
      ))}
    </Swiper>
  );
};

export default IntroScreens;

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,

    backgroundColor: "#F4F1DE",
  },
  image: {
    width: "100%",
    height: "70%",
    marginBottom: Height * 0.022,
    resizeMode: "cover",
    borderBottomRightRadius: Height * 0.15,
    borderBottomLeftRadius: Height * 0.015,
  },
  heading: {
    fontFamily: "Montserrat_Bold",
    fontSize: Height * 0.03,
  },
  titleContainer: {
    width: Width * 0.9,
    alignSelf: "center",
    alignItems: "flex-start",
  },
  description: {
    fontSize: Height * 0.019,
    marginTop: Height * 0.01,

    fontFamily: "Montserrat_Regular",
  },
  dot: {
    backgroundColor: "#cccccc",
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  activeDot: {
    backgroundColor: "#000000",
    width: Width * 0.07,
    height: 10,

    right: 0,
  },
  btn: {
    alignSelf: "center",
    fontFamily: "Montserrat_Medium",
    fontSize: Height * 0.02,
    paddingHorizontal: Width * 0.09,
    paddingVertical: Height * 0.01,
    color: "white",
  },
  button: {
    position: "absolute",
    top: Height * 0.9,
    left: Width * 0.7,
    backgroundColor: "black",
    borderRadius: Height * 0.01,
  },
});
