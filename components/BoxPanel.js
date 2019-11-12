import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Card } from "react-native-paper";
import { disableExpoCliLogging } from "expo/build/logs/Logs";

//const background = require("../assets/main.png");
const dog = require("../assets/dog.png");

export default class Box extends React.Component {
  render() {
    return (
      <Card style={[styles.dabba, this.props.style]}>
        <Image source={dog} style={styles.picture} />
        <View
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: 20
          }}
        >
          <Text style={styles.textp}> Name: {this.props.name} </Text>
          <Text style={styles.textp}> Duration: {this.props.duration} </Text>
          <Text style={styles.textp}> Price: ${this.props.price} </Text>
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  dabba: {
    height: 290,
    width: 300,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    display: "flex",
    flex: 2,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "stretch",
    elevation: 6,
    borderColor: "black",
    borderWidth: 1
  },
  picture: {
    marginTop: 20,
    alignSelf: "center",
    height: 150,
    width: 150
  },
  textp: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: "10%",
    color: "#1c6470"
  }
});
