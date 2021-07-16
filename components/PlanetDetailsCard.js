import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Feather } from "@expo/vector-icons";
const uranus = require("../assets/img/uranus.png");
const saturn = require("../assets/img/saturn.png");
const jupiter = require("../assets/img/jupiter.png");
const sun = require("../assets/img/sun.png");
const venus = require("../assets/img/venus.png");
const earth = require("../assets/img/earth.png");
const mars = require("../assets/img/mars.png");
const mercury = require("../assets/img/mercury.png");
const moon = require("../assets/img/moon.png");
const neptune = require("../assets/img/neptune.png");
import { LinearGradient } from "expo-linear-gradient";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const PlanetCardDetails = ({ planet, navigation }) => {
  const getImage = (name) => {
    switch (name) {
      case "Sun":
        return sun;
      case "Venus":
        return venus;
      case "Earth":
        return earth;
      case "Neptune":
        return neptune;
      case "Moon":
        return moon;
      case "Mars":
        return mars;
      case "Mercury":
        return mercury;
      case "Jupiter":
        return jupiter;
      case "Saturn":
        return saturn;
      case "Uranus":
        return uranus;
    }
  };
  return (
    <LinearGradient
      colors={[
        "rgba(62,39,63,0.0)",
        "rgba(62,39,63,0.5)",
        "#3E3963",
        "#3E3963",
        "#3E3963",
      ]}
      style={styles.infoCardParent}
    >
      <StatusBar hidden />
      <View style={styles.infoCard}>
        <View style={styles.infoCardChild}>
          <Image
            source={getImage(planet.name)}
            style={{ width: 80, height: 80 }}
          />
          <Text style={styles.title}>{planet.name}</Text>
          <Text style={styles.subTitle}>{planet.location}</Text>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.climateInfo}>
              <Image
                source={require("../assets/img/ic_distance.png")}
                style={styles.climateImg}
              />
              <Text style={styles.subTitle}>{planet.distance}</Text>
            </View>
            <View style={styles.climateInfo}>
              <Image
                source={require("../assets/img/ic_gravity.png")}
                style={styles.climateImg}
              />
              <Text style={styles.subTitle}>{planet.gravity}</Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          position: "absolute",
          height: "40%",
          width: "100%",
          overflow: "hidden",
          paddingHorizontal: 10,
          bottom: 80,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.title_2}>OVERVIEW</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("PlanetDetails", {
                description: planet.description,
              })
            }
          >
            <Feather style={styles.title_2} name="arrow-right" color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.blueStrike}></View>

        <ScrollView>
          <Text style={styles.subTitle}>{planet.description}</Text>
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default PlanetCardDetails;

const styles = StyleSheet.create({
  climateImg: {
    width: 10,
    height: 10,
    marginRight: 10,
  },
  infoCardParent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: windowHeight / 1.8,
    zIndex: 99,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  climateInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    alignItems: "center",
    marginRight: 10,
  },
  infoCard: {
    backgroundColor: "#434273",
    height: 130,
    position: "absolute",
    top: 50,
    left: 20,
    right: 20,
    borderRadius: 10,
    shadowColor: "rgba(0,0,0,0.2)",
    shadowOffset: { width: 12, height: 12 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  infoCardChild: {
    position: "absolute",
    left: 0,
    right: 0,
    top: -40,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: "white",
    fontWeight: "600",
  },
  title_2: {
    fontSize: 20,
    color: "white",
    fontWeight: "600",
    marginTop: windowHeight / 10,
  },
  subTitle: {
    fontSize: 12,
    color: "rgba(200,200,200, 0.5)",
    letterSpacing: 1.1,
  },
  blueStrike: {
    height: 2,
    backgroundColor: "lightblue",
    width: 20,
    marginBottom: 10,
  },
});
