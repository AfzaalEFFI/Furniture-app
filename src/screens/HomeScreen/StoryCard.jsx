import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";

const Height = Dimensions.get("screen").height;
const Width = Dimensions.get("screen").width;

// Story data with image, offer, and code information
const storyData = [
  {
    id: 1,
    image: require("../../../assets/story1.jpg"),
    off: "50%",
    code: "E79FYHET",
  },
  {
    id: 2,
    image: require("../../../assets/story2.jpg"),
    off: "45%",
    code: "F83FYHET",
  },
  {
    id: 3,
    image: require("../../../assets/story3.jpg"),
    off: "75%",
    code: "A129FYHET",
  },
  {
    id: 4,
    image: require("../../../assets/story4.jpg"),
    off: "50%",
    code: "P55FYHET",
  },
];

const renderItem = ({ item }) => {
  return (
    <ImageBackground
      source={item.image}
      style={styles.mainContainer}
      imageStyle={styles.image}
    >
      <View style={styles.titleContainer}>
        <View style={styles.infoContainer}>
          {/* Offer */}
          <Text style={styles.title}>{item.off} off</Text>

          {/* Offer Description */}
          <Text style={styles.description}>on everything today</Text>

          {/* Code */}
          <Text style={styles.code}>with code {item.code}</Text>

          {/* Get Now Button */}
          <TouchableOpacity style={styles.actionContainer}>
            <Text style={styles.button}>Get Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const StoryCard = () => {
  return (
    <View>
      <FlatList
        data={storyData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default StoryCard;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#DADADA",
    width: Width * 0.8,
    marginHorizontal: 20,
    borderRadius: 8,
    shadowColor: "red",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 4,
    height: Height * 0.2,
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    opacity: 0.8,
    borderRadius: 10,
  },

  titleContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 100,
  },
  infoContainer: {
    paddingHorizontal: Width * 0.02,
    paddingVertical: Height * 0.01,
  },
  title: {
    fontFamily: "Montserrat_Bold",
    fontSize: Height * 0.04,
  },
  description: {
    fontFamily: "Montserrat_Medium",
    fontSize: Height * 0.022,
  },
  code: {
    fontFamily: "Montserrat_Regular",
    fontSize: Height * 0.018,
    paddingVertical: Height * 0.004,
  },
  actionContainer: {
    backgroundColor: "#000",
    width: Width * 0.25,
    alignItems: "center",
    borderRadius: Height * 0.1,
    marginTop: 12,
  },
  button: {
    color: "#fff",
    paddingVertical: Height * 0.008,
  },
});
