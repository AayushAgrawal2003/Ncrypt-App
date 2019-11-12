import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Constants from "expo-constants";

import Background from "../components/Background";
import { LinearGradient } from "expo-linear-gradient";
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, backgroundColor: "#d9ebfc" }}>
        <LinearGradient
          colors={["#d9ebfc"]}
          colors={["rgba(255,255,255,0.5)", "transparent"]}
          style={{
            padding: 15,
            alignItems: "center",

            height: "100%"
          }}
        >
          <View style={styles.container}>
            <Button
              title="Welcome"
              onPress={() =>
                this.props.navigation.navigate("Animal", { text: "Jane" })
              }
            />
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight + 10
  }
});
