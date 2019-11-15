import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";

import { Dimensions } from "react-native";
const collor = require("../assets/collo.png");
import Background from "../components/Background";
import { LinearGradient } from "expo-linear-gradient";
import * as Font from "expo-font";
const screenHeight = Math.round(Dimensions.get("window").height);
const screenWidth = Math.round(Dimensions.get("window").width);
const picture = require("../assets/logo.png");
const picture2 = require("../assets/logo2.png");
const picture3 = require("../assets/logomain.png");
const picture4 = require("../assets/change.jpeg");
const picture5 = require("../assets/next.png");

export default class HomeScreen extends React.Component {
  state = {
    fontLoaded: false
  };

  // twos = this.props.clss;
  async componentDidMount() {
    await Font.loadAsync({
      Montserrat: require("../assets/fonts/Montserrat.ttf"),
      prox: require("../assets/fonts/PX.otf"),
      com: require("../assets/fonts/comfart.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={{ backgroundColor: "#d9ebfc" }}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <LinearGradient
            colors={["#d9ebfc"]}
            colors={["rgba(255,255,255,0.5)", "transparent"]}
            style={{
              alignItems: "center",
              height: screenHeight,
              width: screenWidth
            }}
          >
            <Image source={picture3} style={styles.img} />
            {this.state.fontLoaded ? (
              <Text style={styles.txt}>VKare</Text>
            ) : null}
            <View
              style={{
                backgroundColor: "#0d8ca6",
                position: "absolute",
                zIndex: -10,
                bottom: 0,
                height: screenHeight * 0.65,
                width: screenWidth
              }}
            ></View>
            <View style={styles.container}>
              {/* <Button
                title="Welcome"
                onPress={() =>
                  this.props.navigation.navigate("Animal", { text: "Jane" })
                }
                style={styles.button}
              />
              <Button
                title="Welcome"
                onPress={() =>
                  this.props.navigation.navigate("Animal", { text: "Jane" })
                }
                style={styles.button}
              /> */}
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Health")}
              >
                {this.state.fontLoaded ? (
                  <Text style={styles.signup}>Start Tracking</Text>
                ) : null}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("About", { text: "Jane" })
                }
              >
                {this.state.fontLoaded ? (
                  <Text style={styles.login}>About Us</Text>
                ) : null}
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  second: {
    backgroundColor: "white",
    position: "relative",

    width: screenWidth,
    height: screenHeight * 0.8
  },
  img: {
    // position: "absolute",
    // bottom: "50%",
    // top: "10%",
    // left: "50%",
    // right: "50%",
    backgroundColor: "transparent",
    width: 300,
    resizeMode: "contain",
    zIndex: 0
  },
  txt: {
    position: "absolute",
    color: "#f5cb11",
    bottom: "38%",
    fontSize: 45,
    letterSpacing: 3,
    fontFamily: "com",
    zIndex: 100
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: "center",
    backgroundColor: "#2196F3"
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "white"
  },
  signup: {
    backgroundColor: "white",
    color: "#3A59FF",
    width: screenWidth * 0.8,
    borderRadius: 25,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "prox",
    padding: "2%",
    fontSize: 33
  },
  login: {
    backgroundColor: "#3A59FF",
    color: "white",
    width: "75%",
    borderRadius: 25,
    textAlign: "center",
    fontWeight: "bold",
    marginLeft: "11%",
    padding: "2%",
    fontSize: 27,
    marginTop: "10%",
    fontFamily: "com"
  }
});
