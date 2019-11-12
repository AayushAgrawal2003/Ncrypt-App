import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const background = require("../assets/main.png");

import { LinearGradient } from "expo-linear-gradient";

export default class Background extends React.Component {
  render() {
    return (
      <View style={{ position: "absolute" }}>
        {/* <Image source={background} style={styles.picture} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  picture: {
    height: 600,
    width: 400,
    zIndex: -10,
    position: "absolute",
    top: 0,
    left: 0
  }
});
