import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons, Feather } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "./src/screens/HomeScreen";
import MovieScreen from "./src/screens/MovieScreen";
import SerieScreen from "./src/screens/SerieScreen";

import SearchBar from "./src/screens/SearchBar";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
const Stack = createStackNavigator();

const MainScreens = () => (
  <Stack.Navigator>
    <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="movie" component={MovieScreen} options={{ headerShown: false }} />
    <Stack.Screen name="serie" component={SerieScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Search" component={SearchBar} options={{ headerShown: false }} />
  </Stack.Navigator>
);
export default () => {
  const [fontLoaded] = useFonts({
    Regular: require("./assets/fonts/NunitoSans-Regular.ttf"),
    Bold: require("./assets/fonts/NunitoSans-Bold.ttf"),
    Black: require("./assets/fonts/NunitoSans-Black.ttf"),
    ExtraBold: require("./assets/fonts/NunitoSans-ExtraBold.ttf"),
    ExtraLight: require("./assets/fonts/NunitoSans-ExtraLight.ttf"),
    Light: require("./assets/fonts/NunitoSans-Light.ttf"),
    SemiBold: require("./assets/fonts/NunitoSans-SemiBold.ttf"),
  });
  return fontLoaded ? (
    <NavigationContainer options={{ headerShown: false }}>
      <MainScreens />
    </NavigationContainer>
  ) : (
    <AppLoading />
  );
};
