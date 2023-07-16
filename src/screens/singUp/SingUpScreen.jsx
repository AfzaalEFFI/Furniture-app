import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import TextInputCN from "../../components/TextInput";
import KeybordWrapper from "../../components/KeybordWrapper";
import { Entypo, AntDesign } from "react-native-vector-icons";
import logo from "../../../assets/logo.png";
import { useNavigation } from "@react-navigation/native";

const Height = Dimensions.get("screen").height;
const Width = Dimensions.get("screen").width;

const SingUpScreen = () => {
  const navigation = useNavigation();

  // Function to handle sign-up button press
  const handleSignUp = () => {
    // Your sign-up logic here
    navigation.navigate("login");
  };

  return (
    <KeybordWrapper>
      <View style={styles.main}>
        {/* Logo */}
        <View style={{ alignSelf: "center", top: Height * 0.06 }}>
          <Image source={logo} style={styles.image} />
        </View>

        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.description}>Create a new account</Text>
        </View>

        {/* Input fields */}
        <View style={styles.inputContainer}>
          <TextInputCN label="User Name" placeholder="Enter Your Name" />
          <TextInputCN label="Email" placeholder="Enter Your Email" />
          <TextInputCN label="Password" placeholder="Enter Your Password" />
          <TextInputCN
            label="Confirm Password"
            placeholder="Re-enter your Password"
          />
        </View>

        {/* Action buttons */}
        <View style={styles.actionContainer}>
          {/* Sign-up button */}
          <TouchableOpacity
            style={{
              ...styles.btnContainer,
              backgroundColor: "black",
              flexDirection: "column",
            }}
            onPress={handleSignUp}
          >
            <Text style={styles.primaryBtn}>Sign Up</Text>
          </TouchableOpacity>

          {/* OR divider */}
          <View style={styles.orContainer}>
            <View style={styles.lineContainer}></View>
            <Text>or</Text>
            <View style={styles.lineContainer}></View>
          </View>

          {/* Continue with Facebook button */}
          <TouchableOpacity style={styles.btnContainer}>
            <Entypo name="facebook" style={styles.icon} color="white" />
            <Text style={styles.primaryBtn}>Continue with Facebook</Text>
          </TouchableOpacity>

          {/* Continue with Google button */}
          <TouchableOpacity
            style={{
              ...styles.btnContainer,
              backgroundColor: "white",
              borderWidth: 0.3,
              borderColor: "darkgray",
            }}
          >
            <AntDesign name="google" style={styles.icon} color="black" />
            <Text
              style={{
                ...styles.primaryBtn,
                color: "black",
              }}
            >
              Continue with Google
            </Text>
          </TouchableOpacity>

          {/* Continue with Apple button */}
          <TouchableOpacity
            style={{
              ...styles.btnContainer,
              backgroundColor: "#fff",
              borderWidth: 0.2,
              borderColor: "darkgray",
            }}
          >
            <Entypo name="app-store" style={styles.icon} color="black" />
            <Text
              style={{
                ...styles.primaryBtn,
                color: "#000",
              }}
            >
              Continue with Apple
            </Text>
          </TouchableOpacity>
        </View>

        {/* Login link */}
        <View style={styles.signUpContainer}>
          <Text style={styles.description}>Already have an Account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("login")}>
            <Text
              style={{
                ...styles.description,
                color: "indigo",
                fontSize: Height * 0.02,
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeybordWrapper>
  );
};

export default SingUpScreen;

const styles = StyleSheet.create({
  // Styles for each section go here
  main: {
    backgroundColor: "#fff",
  },
  headerContainer: {
    // flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    marginVertical: Height * 0.04,
    top: 20,
    left: 20,
  },
  title: {
    fontFamily: "Montserrat_Bold",
    fontSize: Height * 0.03,
    fontWeight: "600",
  },
  description: {
    fontFamily: "Montserrat_Regular",
    fontSize: Height * 0.018,
  },
  inputContainer: {
    flex: 0.6,
    width: Width * 0.9,
    alignSelf: "center",
  },
  actionContainer: {
    flex: 2,
    marginTop: 40,
  },
  primaryBtn: {
    color: "white",
    fontFamily: "Montserrat_Bold",
    fontSize: Height * 0.02,
    paddingVertical: Height * 0.017,
  },
  btnContainer: {
    backgroundColor: "#3B5999",
    color: "white",
    borderRadius: Height * 0.1,
    fontFamily: "Montserrat_Bold",
    fontSize: Height * 0.02,
    width: Width * 0.8,
    alignSelf: "center",
    alignItems: "center",
    marginVertical: Height * 0.009,
  },
  orContainer: {
    width: Width * 0.8,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    opacity: 0.5,
  },
  lineContainer: {
    width: "45%",
    backgroundColor: "black",
    height: Height * 0.001,
  },
  icon: {
    position: "absolute",
    left: Width * 0.07,
    top: Height * 0.015,
    fontSize: Height * 0.025,
  },
  signUpContainer: {
    width: Width * 0.6,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  image: {
    width: 300,
    height: 100,
  },
});
