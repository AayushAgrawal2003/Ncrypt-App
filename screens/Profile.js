import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Health from "../components/Healthrecords";
import { ScrollView } from "react-native-gesture-handler";

const heart = require("../assets/dil.png");
const steps = require("../assets/doggo.png");
const dis = require("../assets/scale.png");
const cal = require("../assets/fire.png");
const vet = require("../assets/doc.png");
const kilo = require("../assets/kilo.png");
const han = require("../assets/veg.png");

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: "Stats",
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  //get record component DONE
  //place them
  //design make UI
  //Add Heart to UI
  render() {
    //const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
          {/* <Button
          title="Main"
          onPress={() => this.props.navigation.navigate("Animal")}
        /> */}

          <Health
            current="93"
            title="Heart Rate"
            goal="--"
            src={heart}
            style={{ backgroundColor: "#ffac8e" }}
          />

          <Health
            current="2000 Steps"
            title="Steps"
            goal="10000 Steps"
            src={steps}
            style={{ backgroundColor: "#fd7792" }}
          />

          <Health
            current="10Km"
            title="Distance Travelled"
            goal="20Km"
            src={dis}
            style={{ backgroundColor: "#55ae95" }}
          />

          <Health
            current="560"
            title="Calories Burnt"
            goal="1000"
            src={cal}
            style={{ backgroundColor: "#f39422" }}
            calories={{ height: 39 }}
          />

          <Health
            current="Quarterly"
            title="Vet Visit "
            goal="Monthly"
            src={vet}
            style={{ backgroundColor: "#eef5b2" }}
            calories={{ height: 35 }}
          />

          <Health
            current="77 kg"
            title="Weight"
            goal="73 Kg"
            src={kilo}
            style={{ backgroundColor: "#fb5b5a" }}
          />

          <Health
            current="--"
            title="Health and Nutrition "
            goal="--"
            src={han}
            style={{ backgroundColor: "#71a95a" }}
          />

          {/* <Text>
          itemId: {JSON.stringify(this.props.navigation.getParam("text"))}
        </Text> */}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#ecf0f1"
  },
  scroll: {
    flexGrow: 1
  }
});
