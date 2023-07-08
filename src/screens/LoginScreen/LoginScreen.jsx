import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import logo from "../../../assets/todo.png";
import { Dimensions } from "react-native";
import TextInputCN from "../../components/TextInput";
import KeybordWrapper from "../../components/KeybordWrapper";
import { KeyboardAvoidingView } from "react-native";
import { Entypo, AntDesign } from "react-native-vector-icons";

const Height = Dimensions.get("screen").height;
const Width = Dimensions.get("screen").width;

const LoginScreen = () => {
  return (
    <KeybordWrapper>
      <View style={styles.main}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Wellcome </Text>
          <Text style={styles.decripation}>
            please login or singup to continue our app
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInputCN label="Email" placeholder="Enter Your Email" />
          <TextInputCN label="Password" placeholder="Enter Your Password" />
        </View>

        <View style={styles.actionContainer}>
          <TouchableOpacity
            style={{
              ...styles.btnContainer,
              backgroundColor: "black",
              flexDirection: "column",
            }}
          >
            <Text style={styles.primaryBtn}>Login</Text>
          </TouchableOpacity>

          <View style={styles.orContainer}>
            <View style={styles.lineContainer}></View>
            <Text>or</Text>
            <View style={styles.lineContainer}></View>
          </View>

          <TouchableOpacity style={styles.btnContainer}>
            <Entypo name="facebook" style={styles.icon} color="white" />
            <Text style={styles.primaryBtn}>continue with Facebook</Text>
          </TouchableOpacity>

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
              continue with Google
            </Text>
          </TouchableOpacity>
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
              continue with Apple
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.singUpContainer}>
          <Text style={styles.decripation}>Don't have an Account? </Text>
          <Text
            style={{
              ...styles.decripation,
              color: "indigo",
              fontSize: Height * 0.02,
            }}
          >
            singup
          </Text>
        </View>
      </View>
    </KeybordWrapper>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // height: "100%",
  },
  headerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: Height * 0.13,
  },
  title: {
    fontFamily: "Montserrat_Bold",
    fontSize: Height * 0.03,
    fontWeight: "600",
  },
  decripation: {
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

    // alignSelf: "center",
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
    marginBottom: 10,
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
  singUpContainer: {
    width: Width * 0.6,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    marginTop: Height * 0.015,
  },
});
