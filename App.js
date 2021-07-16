import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import { planets } from "./modal/planets";
import OnboardingScreen from "./screens/OnboardingScreen";
import PlanetDetails from "./screens/PlanetDetails";
import StarDetails from "./screens/StarDetails";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={"Onboarding"} component={OnboardingScreen} />
        <Stack.Screen name={"Home"} component={HomeScreen} />
        <Stack.Screen name={"Details"} component={DetailsScreen} />
        <Stack.Screen name={"PlanetDetails"} component={PlanetDetails} />
        <Stack.Screen name={"StarDetails"} component={StarDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
