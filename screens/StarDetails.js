import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import axios from "axios";
import { Card, Icon } from "react-native-elements";

export default class StarDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: `http://127.0.0.1:5000/planet?name=${this.props.route.params.planetName}`,
      planetDetails: [],
    };
  }

  componentDidMount() {
    this.getPlanets();
  }

  getPlanets = () => {
    const { url } = this.state;
    axios
      .get(url)
      .then((res) => {
        this.setState({
          planetDetails: res.data.data,
        });
        this.setImage();
        // console.log(this.state.planetDetails);
      })
      .catch((err) => console.log(err.message));
  };

  render() {
    const { planetDetails, image } = this.state;
    const windowHeight = Dimensions.get("window").height;
    const windowWidth = Dimensions.get("window").width;

    return (
      <View style={styles.containerCard}>
        <StatusBar hidden />
        <View>
          <Icon
            type="feather"
            name="arrow-left"
            size={30}
            onPress={() => this.props.navigation.goBack()}
            style={{
              marginLeft: -windowWidth / 1.8,
            }}
          />
          <Card>
            <Card.Title>Name: {planetDetails.name}</Card.Title>
            <Card.Title>Gravity: {planetDetails.gravity}</Card.Title>
            <Card.Title>Mass: {planetDetails.mass}</Card.Title>
            <Card.Title>Radius: {planetDetails.radius}</Card.Title>
            <Card.Title>Radius: {planetDetails.distance}</Card.Title>
          </Card>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerCard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
