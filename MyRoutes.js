import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntroScreens from "./src/screens/IntroScreens/IntroScreens";
import { SafeAreaView } from "react-navigation";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
import SingUpScreen from "./src/screens/singUp/SingUpScreen";

const Stack = createNativeStackNavigator();

const MyRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="singup"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="introScreen" component={IntroScreens} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="singup" component={SingUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyRoutes;

const styles = StyleSheet.create({});
