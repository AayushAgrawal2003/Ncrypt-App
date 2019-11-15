import * as React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
const dog = require("../assets/dog.png");
const friends = require("../assets/friends.jpg");
const friend = require("../assets/friends2.png");
import { LinearGradient } from "expo-linear-gradient";

import { Dimensions } from "react-native";
const screenHeight = Math.round(Dimensions.get("window").height);
const screenWidth = Math.round(Dimensions.get("window").width);
// You can import from local files

// or any pure javascript modules available in npm

export default class AboutScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={["#179c36", "transparent"]} style={styles.back}>
          <Image
            source={friend}
            style={{
              height: 200,
              resizeMode: "contain",
              position: "absolute",
              top: screenHeight * 0.2,
              left: -screenWidth * 0.35
            }}
          />

          <TouchableOpacity style={styles.signUp}>
            <Text style={styles.txt}>Coming Soon...</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  back: {
    height: screenHeight,
    width: screenWidth,
    position: "absolute"
  },
  signUp: {
    textAlign: "center",
    position: "absolute",
    bottom: 150,
    left: screenWidth * 0.17
  },
  txt: {
    backgroundColor: "#179c36",
    color: "white",
    fontWeight: "bold",
    borderRadius: 25,
    textAlign: "center",
    padding: "3.5%",
    paddingHorizontal: "8%",
    fontSize: 27,
    zIndex: 10
  }
});
