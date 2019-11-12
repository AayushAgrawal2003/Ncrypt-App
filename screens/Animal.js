import React from "react";
import { Text, View, StyleSheet, Button, ScrollView } from "react-native";
import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";

import Box from "../components/BoxPanel";

export default class AnimalScreen extends React.Component {
  static navigationOptions = {
    title: "PetPro"
  };
  render() {
    //const {navigate} = this.props.navigation;
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
          <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
          >
            {/* <Button
            title="Go Back"
            onPress={() => this.props.navigation.goBack()}
          /> */}

            <Text> Packages</Text>
            <Box
              name="Premium"
              duration="3 Months"
              price="10"
              style={styles.play}
            />
            <Box
              name="Premium"
              duration="3 Months"
              price="10"
              style={styles.play}
            />
            <Box
              name="Premium"
              duration="3 Months"
              price="10"
              style={styles.play}
            />
          </ScrollView>
        </LinearGradient>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,

    padding: 8,
    flexGrow: 1
  },
  play: {
    marginVertical: 10
  }
});
