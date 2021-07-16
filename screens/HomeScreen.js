import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SolarSystem from "./SolarSystem";
import Stars from "./Stars";
import { Image, Text, View, Platform } from "react-native";
import { Feather } from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();

export default function HomeScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Space"
      activeColor="white"
      inactiveColor="lightgray"
      tabBarOptions={{
        activeTintColor: "white",
        labelStyle: { fontSize: 20 },
        style: {
          backgroundColor: "#3E3963",
          paddingTop: Platform.OS === "ios" ? 50 : 0,
        },
      }}
    >
      <Tab.Screen
        name="Solar System"
        component={SolarSystem}
        options={{
          tabBarLabel: () => (
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Image
                source={require("../assets/img/planet.png")}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text style={{ fontSize: 20, color: "white", marginTop: 5 }}>
                Space
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Stars"
        component={Stars}
        options={{
          tabBarLabel: () => (
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Image
                source={require("../assets/img/star.png")}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text style={{ fontSize: 20, color: "white", marginTop: 5 }}>
                Stars
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
