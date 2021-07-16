import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from "react-native";
import Constants from "expo-constants";
import { Feather } from "@expo/vector-icons";
import { planets } from "../modal/planets";
import PlanetCard from "../components/PlanetCard";
import { LinearGradient } from "expo-linear-gradient";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

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

const SolarSystem = ({ navigation, planet }) => {
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
    <View style={styles.container}>
      <StatusBar backgroundColor="#3E3963" />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.planetMap}>
          {/* sun */}
          <Image source={sun} style={{ width: 80, height: 80 }} />
          <View
            style={{
              flexDirection: "column",
              marginTop: -25,
              alignItems: "center",
            }}
          >
            <Text style={styles.planetMapDash}>69.347M km</Text>
            <Text style={styles.planetMapDash}> - - - - - - - - - - </Text>
          </View>
          {/* sun */}

          {/* mercury */}
          <Image source={mercury} style={{ width: 80, height: 80 }} />
          <View
            style={{
              flexDirection: "column",
              marginTop: -25,
              alignItems: "center",
            }}
          >
            <Text style={styles.planetMapDash}>50M km</Text>
            <Text style={styles.planetMapDash}> - - - - - - - - - - </Text>
          </View>
          {/* mercury */}

          {/* earth */}
          <Image source={earth} style={{ width: 80, height: 80 }} />
          <View
            style={{
              flexDirection: "column",
              marginTop: -25,
              alignItems: "center",
            }}
          >
            <Text style={styles.planetMapDash}>384.4K km</Text>
            <Text style={styles.planetMapDash}> - - - - - - - - - - </Text>
          </View>
          {/* earth */}

          {/* moon */}
          <Image source={moon} style={{ width: 80, height: 80 }} />
          <View
            style={{
              flexDirection: "column",
              marginTop: -25,
              alignItems: "center",
            }}
          >
            <Text style={styles.planetMapDash}>342.41M km</Text>
            <Text style={styles.planetMapDash}> - - - - - - - - - - </Text>
          </View>
          {/* moon */}

          {/* mars */}
          <Image source={mars} style={{ width: 80, height: 80 }} />
          <View
            style={{
              flexDirection: "column",
              marginTop: -25,
              alignItems: "center",
            }}
          >
            <Text style={styles.planetMapDash}>505.7M km</Text>
            <Text style={styles.planetMapDash}> - - - - - - - - - - </Text>
          </View>
          {/* mars */}

          {/* jupiter */}
          <Image source={jupiter} style={{ width: 80, height: 80 }} />
          <View
            style={{
              flexDirection: "column",
              marginTop: -25,
              alignItems: "center",
            }}
          >
            <Text style={styles.planetMapDash}>649M km</Text>
            <Text style={styles.planetMapDash}> - - - - - - - - - - </Text>
          </View>
          {/* jupiter */}

          {/* saturn */}
          <Image source={saturn} style={{ width: 80, height: 80 }} />
          <View
            style={{
              flexDirection: "column",
              marginTop: -25,
              alignItems: "center",
            }}
          >
            <Text style={styles.planetMapDash}>1.47B km</Text>
            <Text style={styles.planetMapDash}> - - - - - - - - - - </Text>
          </View>
          {/* saturn */}

          {/* uranus */}
          <Image source={uranus} style={{ width: 80, height: 80 }} />
          <View
            style={{
              flexDirection: "column",
              marginTop: -25,
              alignItems: "center",
            }}
          >
            <Text style={styles.planetMapDash}>1.67B km</Text>
            <Text style={styles.planetMapDash}> - - - - - - - - - - </Text>
          </View>
          {/* uranus */}

          {/* neptune */}
          <Image source={neptune} style={{ width: 80, height: 80 }} />

          {/* neptune */}
        </View>
      </ScrollView>

      <View style={styles.planetList}>
        <FlatList
          data={planets}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Details", { planet: item })}
            >
              <PlanetCard planet={item} />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default SolarSystem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "column",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#3E3963",
  },
  planetMap: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  planetMapDash: {
    color: "orange",
    fontWeight: "bold",
    fontSize: 20,
  },
  planetList: {
    height: windowHeight / 1.5,
    marginHorizontal: 15,
    paddingBottom: 30,
  },
  infoCardChild: {
    position: "absolute",
    left: 0,
    right: 0,
    top: -40,
    alignItems: "center",
  },
});
