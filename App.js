import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ProductCard from "./components/ProductCard";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import ProductDetail from "./screens/ProductDetail";
import BlogDetail from "./screens/BlogDetail";
import CampusDetail from "./screens/CampusDetail";
import SchoolGameScreen from "./screens/SchoolGameScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={ProductDetail} />
        <Stack.Screen name="BlogDetail" component={BlogDetail} />
        <Stack.Screen name="CampusDetail" component={CampusDetail} />
        <Stack.Screen name="SchoolGame" component={SchoolGameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
