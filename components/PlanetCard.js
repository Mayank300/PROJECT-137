import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

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

const PlanetCard = ({ planet }) => {
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
    <View style={styles.card}>
      <View style={styles.infoCard}>
        <View style={styles.titleCard}>
          <View style={{}}>
            <Text style={styles.title}>{planet.name}</Text>
            <Text style={styles.subTitle}>{"Milkyway Galaxy"}</Text>
            <View style={styles.blueStrike}></View>
          </View>
          <Feather
            name="arrow-right"
            size={24}
            color="rgba(200,200,200, 0.5)"
            style={{ marginRight: 10 }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            marginLeft: 40,
          }}
        >
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
      <View style={styles.image}>
        <Image
          source={getImage(planet.name)}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
    </View>
  );
};

export default PlanetCard;

const styles = StyleSheet.create({
  blueStrike: {
    height: 2,
    backgroundColor: "lightblue",
    width: 20,
  },
  card: {
    height: 100,
    width: "100%",
    marginTop: 26,
  },
  climateImg: {
    width: 10,
    height: 10,
    marginRight: 10,
  },
  climateInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    alignItems: "center",
    marginRight: 10,
  },
  infoCard: {
    height: 100,
    width: "80%",
    position: "absolute",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#434273",
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 10,
    shadowColor: "rgba(0,0,0,0.2)",
    shadowOffset: { width: 12, height: 12 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  image: {
    width: 80,
    height: 80,
    backgroundColor: "red",
    position: "absolute",
    borderRadius: 40,
    top: 10,
    left: 10,
    overflow: "hidden",
  },

  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "600",
  },
  titleCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 40,
    alignItems: "center",
  },
  subTitle: {
    fontSize: 11,
    color: "rgba(200,200,200, 0.5)",
    letterSpacing: 1.1,
  },
});
