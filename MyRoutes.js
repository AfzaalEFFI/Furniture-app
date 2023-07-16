import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntroScreens from "./src/screens/IntroScreens/IntroScreens";
import { SafeAreaView } from "react-navigation";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
import SingUpScreen from "./src/screens/singUp/SingUpScreen";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import ProductScreen from "./src/screens/ProductScreen/ProductScreen";
import DescriptionScreen from "./src/screens/ProductScreen/DescriptionScreen";

const Stack = createNativeStackNavigator();

const MyRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="introScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="introScreen" component={IntroScreens} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signup" component={SingUpScreen} />
        <Stack.Screen name="homeScreen" component={HomeScreen} />
        <Stack.Screen name="productScreen" component={ProductScreen} />
        <Stack.Screen name="singleProduct" component={DescriptionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyRoutes;

const styles = StyleSheet.create({});
