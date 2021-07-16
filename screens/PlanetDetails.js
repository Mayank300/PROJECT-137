import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const windowHeight = Dimensions.get("window").height;

export default class PlanetDetails extends Component {
  render() {
    const { description } = this.props.route.params;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.navBar}>
            <TouchableOpacity onPress={() => this.props.navigation.pop()}>
              <Feather name="arrow-left" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <Text style={styles.text}> {JSON.stringify(description)} </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#3E3963",
  },
  text: {
    textAlign: "center",
    marginHorizontal: 20,
    marginTop: 100,
    color: "white",
    fontSize: 20,
    lineHeight: 34,
    marginBottom: 20,
  },
  navBar: {
    position: "absolute",
    top: 30,
    left: 0,
    right: 0,
    height: 50,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    zIndex: 100,
  },
});
