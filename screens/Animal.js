import React from "react";
import { Text, View, StyleSheet, Button, ScrollView } from "react-native";

import Box from "../components/BoxPanel";
const dog = require("../assets/pic1.jpg");
const dog2 = require("../assets/pic2.jpg");
const dog3 = require("../assets/pic3.jpg");

export default class AnimalScreen extends React.Component {
  static navigationOptions = {
    title: "PetPro Plans",
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  render() {
    //const {navigate} = this.props.navigation;
    return (
      <View style={{ flex: 1, backgroundColor: "#d9ebfc" }}>
        {/* <LinearGradient
          colors={["rgba(255, 255, 255,0.8)", "transparent"]}
          style={{
            padding: 0,
            height: "100%"
          }}
        > */}
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
        >
          {/* <Button
            title="Go Back"
            onPress={() => this.props.navigation.goBack()}
          /> */}

          {/* <Text> Packages</Text> */}
          <Box
            cls={"rgba(143, 52, 235, 0.8)"}
            clss={"rgba(66, 245, 203, 0.8)"}
            src={dog}
            name="Platinum"
            duration="3 Months"
            price="10"
            style={styles.play}
          />
          <Box
            cls={"rgba(225, 161, 93  , 0.8)"}
            clss={"rgba(238, 100, 152, 0.8)"}
            src={dog2}
            name="&nbsp;&nbsp;&nbsp; Gold"
            duration="6 Months"
            price="30"
            style={styles.play}
          />
          <Box
            cls={"rgba(24, 152, 178 , 0.6)"}
            clss={"rgba( 23, 198, 185,0.6)"}
            src={dog3}
            name=" &nbsp;&nbsp;Silver"
            duration="1 Year"
            price="50"
            style={styles.play}
          />
        </ScrollView>
        {/* </LinearGradient> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {},
  play: {
    marginVertical: 1
  }
});
