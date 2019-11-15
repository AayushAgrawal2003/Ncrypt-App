import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import MapView from "react-native-maps";

import { Dimensions } from "react-native";
const screenHeight = Math.round(Dimensions.get("window").height);
const screenWidth = Math.round(Dimensions.get("window").width);
export default class HealthScreen extends React.Component {
  static navigationOptions = {
    title: "Health",
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mapStyle}>
          <MapView style={styles.map} />
        </View>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Profile")}
        >
          <Text style={styles.login}>Stats</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Animal")}
        >
          <Text style={styles.signUp}>Premium</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
    padding: 8
  },

  mapStyle: {
    width: screenWidth * 0.9,
    height: screenHeight * 0.4,
    borderColor: "#424242",
    borderWidth: 10,
    borderRadius: 40,
    overflow: "hidden"
  },
  map: {
    width: screenWidth * 1,
    height: screenHeight * 0.5
  },
  login: {
    backgroundColor: "#f4511e",
    color: "white",
    borderRadius: 25,
    textAlign: "center",
    fontWeight: "bold",
    padding: "3%",
    paddingHorizontal: "8%",
    fontSize: 27,
    marginTop: "10%"
  },
  signUp: {
    backgroundColor: "white",
    color: "#f4511e",
    borderRadius: 25,
    textAlign: "center",
    fontWeight: "bold",
    padding: "3%",
    paddingHorizontal: "8%",
    fontSize: 27,
    marginTop: "10%"
  }
});
