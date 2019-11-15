import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Card } from "react-native-paper";
import * as Font from "expo-font";
//const background = require("../assets/main.png");

//logotypePicx
//Titles
//Goal od the day
//Value ---
//-

export default class Health extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      Montserrat: require("../assets/fonts/Montserrat.ttf"),
      prox: require("../assets/fonts/PX.otf"),
      Rob: require("../assets/fonts/Roboto-Regular.ttf"),
      RobT: require("../assets/fonts/Roboto-Thin.ttf"),
      com: require("../assets/fonts/comfart.ttf")
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <Card style={[styles.dabba, this.props.style]}>
        <Image source={this.props.src} style={styles.picture} />
        {this.state.fontLoaded ? (
          <Text style={(styles.textp, styles.one)}> {this.props.title} </Text>
        ) : null}
        {this.state.fontLoaded ? (
          <Text style={(styles.textp, styles.second)}>
            Current: {this.props.current}
          </Text>
        ) : null}
        {this.state.fontLoaded ? (
          <Text style={(styles.textp, styles.third)}>
            Goal: {this.props.goal}
          </Text>
        ) : null}
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  dabba: {
    height: 100,

    alignSelf: "stretch",

    borderRadius: 3,
    borderColor: "#c4c4c4",
    borderWidth: 0.7
  },
  picture: {
    height: 30,
    width: 30,
    alignSelf: "flex-start",
    position: "absolute",
    left: 10,
    top: 10
  },
  textp: {
    // fontFamily: "",
    fontWeight: "bold"
  },
  one: {
    position: "absolute",
    fontSize: 20,
    left: 50,
    top: 20,
    fontFamily: "Rob"
  },
  second: {
    position: "absolute",
    fontSize: 15,
    left: 30,
    bottom: 10,
    fontFamily: "com"
  },
  third: {
    position: "absolute",
    right: 30,
    fontSize: 15,
    bottom: 10,
    fontFamily: "com"
  }
});
