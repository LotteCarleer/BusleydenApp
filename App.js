import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import ProductCard from "./components/ProductCard";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import ProductDetail from "./screens/ProductDetail";
import BlogDetail from "./screens/BlogDetail";
import CampusDetail from "./screens/CampusDetail";
import SchoolGameScreen from "./screens/SchoolGameScreen";
import CartScreen from "./screens/CartScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
        <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#7aaa25",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 22,
          },
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Busleyden App",

            headerRight: () => (
              <TouchableOpacity 
              onPress={() => navigation.navigate("cart")}>
                <Ionicons
                  name="cart"
                  size={26}
                  color="white"
                />
              </TouchableOpacity>
            )
          }}
        />


        <Stack.Screen
          name="Details"
          component={ProductDetail}
          options={{
            title: "Product",
          }}
        />

        <Stack.Screen
          name="BlogDetail"
          component={BlogDetail}
          options={{
            title: "Blog",
          }}
        />

        <Stack.Screen
          name="CampusDetail"
          component={CampusDetail}
          options={{
            title: "Campus",
          }}
        />

        <Stack.Screen
          name="SchoolGame"
          component={SchoolGameScreen}
          options={{
            title: "📚 School Game",
          }}
        />

        <Stack.Screen
  name="Cart"
  component={CartScreen}
  options={{
    title: "🛒 Winkelmandje",
  }}
/>


      </Stack.Navigator>
    </NavigationContainer>
  );
}
