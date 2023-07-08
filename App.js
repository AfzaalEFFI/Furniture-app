import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntroScreen from "./src/screens/IntroScreens/IntroScreens";
import MyRoutes from "./MyRoutes";
import { View } from "react-native";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_Bold: require("./assets/fonts/Montserrat-Bold.ttf"),
    Montserrat_Medium: require("./assets/fonts/Montserrat-Medium.ttf"),
    Montserrat_Regular: require("./assets/fonts/Montserrat-Regular.ttf"),
    Montserrat_Light: require("./assets/fonts/Montserrat-Light.ttf"),
    Montserrat_MediumBold: require("./assets/fonts/Montserrat-Bold-500.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <MyRoutes />
    </SafeAreaView>
  );
}

export default App;
