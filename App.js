import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ProductCard from "./components/ProductCard";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import ProductDetail from "./screens/ProductDetail";
import BlogDetail from "./screens/BlogDetail";
import CampusDetail from "./screens/CampusDetail";
import SchoolGameScreen from "./screens/SchoolGameScreen";

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
              <Ionicons
                name="school"
                size={26}
                color="white"
              />
            ),
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
