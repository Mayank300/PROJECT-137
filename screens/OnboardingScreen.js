import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  StatusBar,
} from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const Dots = ({ selected }) => {
  let backgroundColor;
  backgroundColor = selected ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.3)";

  return (
    <View
      style={{
        width: 5,
        height: 5,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const Done = ({ ...props }) => (
  <TouchableOpacity
    style={{
      marginHorizontal: 8,
    }}
    {...props}
  >
    <Text style={{ fontSize: 18, color: "white" }}>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/onboard/OBBackground.png")}
      style={styles.image}
    >
      <StatusBar hidden={true} />
      <Onboarding
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.replace("Home")}
        onDone={() => navigation.replace("Home")}
        pages={[
          {
            backgroundColor: "transparent",
            image: (
              <Image
                source={require("../assets/onboard/on1.png")}
                style={styles.obIcon}
              />
            ),
            title: "GO BEYOND",
            subtitle:
              "The beautiful thing about learning is that nobody can take it away from you.",
          },
          {
            backgroundColor: "transparent",

            image: (
              <Image
                source={require("../assets/onboard/on2.png")}
                style={styles.obIcon}
              />
            ),
            title: "EXPLORE",
            subtitle: "Know more about space with us.",
          },
          {
            backgroundColor: "transparent",

            image: (
              <Image
                source={require("../assets/onboard/on3.png")}
                style={styles.obIcon}
              />
            ),
            title: "GET STARTED",
            subtitle: "Stand by !",
          },
        ]}
      />
    </ImageBackground>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  obIcon: {
    width: 300,
    height: 300,
  },
});
