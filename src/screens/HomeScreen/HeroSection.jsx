import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { AntDesign, Ionicons, EvilIcons } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
import StoryCard from "./StoryCard";
import NewArrivals from "./NewArrivals";
import newArrivals from "../../data/NewArrivals";

const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;

const HeroSection = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <>
        <TouchableOpacity
          style={{ paddingHorizontal: Width * 0.012 }}
          onPress={() => navigation.navigate("singleProduct", item)}
        >
          {/* Arrival Card */}
          <View style={styles.arrivalCard}>
            <View style={styles.wishlistIcon}>
              <AntDesign
                name="hearto"
                style={{ fontSize: 20, color: "#fff" }}
              />
            </View>
            <Image source={item.image} style={styles.image} />
          </View>

          {/* Product details */}
          <View style={{ paddingHorizontal: 15 }}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.set}>Set Includes</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
          </View>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <ScrollView>
      {/* Story Card */}
      <View>
        <StoryCard />
      </View>

      {/* Recommended New Arrivals */}
      <View style={styles.newArrivalsContainer}>
        <View>
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <Text style={styles.arrivalTitle}>Recommended</Text>
            <Text style={styles.seeAll}>See All</Text>
          </View>
          <FlatList
            data={newArrivals}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>

      {/* Other New Arrivals */}
      <View>
        <NewArrivals />
      </View>
    </ScrollView>
  );
};

export default HeroSection;

const styles = StyleSheet.create({
  newArrivalsContainer: {},
  image: {
    width: 200,
    height: "100%",
    resizeMode: "cover",
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
    elevation: 4,
    marginHorizontal: 10,
    overflow: "hidden",
  },
  wishlistIcon: {
    position: "absolute",
    backgroundColor: "#000",
    left: Width * 0.3,
    zIndex: 100,
    top: Height * 0.012,
    borderRadius: Height * 0.1,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  productName: {
    fontFamily: "Montserrat_Medium",
    fontSize: Height * 0.018,
    textTransform: "capitalize",
    paddingVertical: Height * 0.004,
    fontWeight: "600",
  },
  productPrice: {
    fontFamily: "Montserrat_Bold",
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
});
