import { StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
import React, { useState } from "react";
import Header from "../../components/Header";
import OfficeCharis from "./OfficeCharis";
import { AntDesign } from "react-native-vector-icons";

const Height = Dimensions.get("screen").height;
const Width = Dimensions.get("screen").width;

const ProductScreen = () => {
  const [isShowInput, setisShowInput] = useState(false);

  console.log(isShowInput);
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <Header isShowInput={isShowInput} setisShowInput={setisShowInput} />
      {isShowInput && (
        <View style={styles.searchContainer}>
          <View style={styles.searchBox}>
            <AntDesign name="search1" style={styles.icon} />
            <TextInput
              placeholder="Search Furniture"
              style={styles.textinput}
            />
          </View>
        </View>
      )}

      <OfficeCharis />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  searchContainer: {
    // paddingVertical: 10,
    marginBottom: 20,
  },
  searchBox: {
    backgroundColor: "#F5F5F5",

    flexDirection: "row",
    alignItems: "center",
    width: Width * 0.82,
    paddingVertical: Height * 0.009,
    paddingHorizontal: Width * 0.02,
    borderRadius: Height * 0.1,
    shadowColor: "#707070",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 8,
    // alignSelf: "center",
    marginLeft: Width * 0.06,
  },
  icon: {
    fontSize: Height * 0.024,
    paddingHorizontal: 10,
  },
  textinput: {
    fontSize: Height * 0.019,
  },
});
