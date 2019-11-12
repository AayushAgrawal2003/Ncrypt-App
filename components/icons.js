import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default class Paws extends React.Component {
  render() {
    return (
      <Image
        source={this.props.src}
        style={[styles.picture, this.props.style]}
      />
    );
  }
}

const styles = StyleSheet.create({
  picture: {
    height: 40,
    width: 40,
    zIndex: -10,
    position: "absolute",
    top: "50%",
    left: "35%"
  }
});
