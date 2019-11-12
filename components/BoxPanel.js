import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Card } from "react-native-paper";
import { disableExpoCliLogging } from "expo/build/logs/Logs";
import { LinearGradient } from "expo-linear-gradient";
import * as Font from "expo-font";
//const background = require("../assets/main.png");
var ones, twos;
export default class Box extends React.Component {
  state = {
    fontLoaded: false
  };

  // twos = this.props.clss;
  async componentDidMount() {
    await Font.loadAsync({
      Montserrat: require("../assets/fonts/Montserrat.ttf"),
      prox: require("../assets/fonts/PX.otf")
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <Card style={[styles.dabba, this.props.style]}>
        <Image source={this.props.src} style={styles.picture} />
        <LinearGradient
          start={[0, 0]}
          end={[1, 0]}
          colors={[this.props.cls, this.props.clss]}
          style={{
            padding: 0,
            height: "100%"
          }}
        >
          {this.state.fontLoaded ? (
            <Text style={(styles.textp, styles.one)}> {this.props.name} </Text>
          ) : null}

          {this.state.fontLoaded ? (
            <Text style={(styles.textp, styles.sec)}>
              {" "}
              Duration: {this.props.duration}{" "}
            </Text>
          ) : null}

          {this.state.fontLoaded ? (
            <Text style={(styles.textp, styles.third)}>
              {" "}
              Price: ${this.props.price}{" "}
            </Text>
          ) : null}
        </LinearGradient>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  dabba: {
    textAlign: "center",
    height: 200,
    width: "100%",
    //backgroundColor: "#f0f0f0",
    //borderRadius: 5,
    display: "flex",
    flex: 2,

    alignSelf: "stretch"
    //borderColor: "black",
    //borderWidth: 1
  },
  picture: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%"
  },
  textp: {
    fontSize: 20,
    fontWeight: "bold",

    color: "white"
  },
  one: {
    alignSelf: "center",
    textAlign: "center",
    position: "absolute",
    left: "50%",
    top: "40%",
    fontSize: 45,
    color: "white",
    fontFamily: "prox",
    transform: [{ translateX: -70 }]
  },
  sec: {
    position: "absolute",
    fontFamily: "Montserrat",
    fontSize: 15,

    color: "rgba(194, 194, 194,0.9)",
    bottom: 0,
    right: 0
  },
  third: {
    position: "absolute",
    bottom: 0,
    left: 0,
    fontSize: 15,

    fontFamily: "Montserrat",
    color: "rgba(194, 194, 194,0.9)"
  }
});
