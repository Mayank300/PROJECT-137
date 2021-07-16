import { Feather } from "@expo/vector-icons";
import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  Platform,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import axios from "axios";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export class Stars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: `http://127.0.0.1:5000/`,
      listData: [],
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
          listData: res.data.data,
        });
        // console.log(this.state.listData);
      })
      .catch((err) => console.log(err.message));
  };

  renderItem = ({ item, index }) => (
    <View style={{ backgroundColor: "#3E3963" }}>
      <TouchableOpacity
        style={styles.card}
        key={index}
        onPress={() =>
          this.props.navigation.navigate("StarDetails", {
            planetName: item.name,
          })
        }
      >
        <View style={styles.infoCard}>
          <View style={styles.titleCard}>
            <View>
              <Text numberOfLines={1} style={styles.title}>
                {item.name}
              </Text>
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
              width: "80%",
            }}
          >
            <View style={styles.climateInfo}>
              <Image
                source={require("../assets/img/ic_distance.png")}
                style={styles.climateImg}
              />
              <Text style={styles.subTitle}>{item.distance}</Text>
            </View>
            <View style={styles.climateInfo}>
              <Image
                source={require("../assets/img/ic_gravity.png")}
                style={styles.climateImg}
              />
              <Text
                numberOfLines={1}
                style={[styles.subTitle, { width: width / 3 }]}
              >
                {item.gravity}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  keyExtractor = (item, index) => index.toString();

  render() {
    const { listData } = this.state;

    if (listData.length === 0) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#000" />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={listData}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

export default Stars;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
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
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#434273",
    borderRadius: 20,
    shadowColor: "rgba(0,0,0,0.2)",
    shadowOffset: { width: 12, height: 12 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    alignSelf: "center",
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
    width: width / 2,
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
