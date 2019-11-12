import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Constants from "expo-constants";
import Health from "../components/Healthrecords";
import { ScrollView } from "react-native-gesture-handler";

const heart = require("../assets/heart.png");

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: "MyPet"
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
            current="2000 Steps"
            title="BigTitle"
            goal="10000 Steps"
            src={heart}
            style={{ backgroundColor: "#ffac8e" }}
          />

          <Health
            current="2000 Steps"
            title="BigTitle"
            goal="10000 Steps"
            src={heart}
            style={{ backgroundColor: "#fd7792" }}
          />

          <Health
            current="2000 Steps"
            title="BigTitle"
            goal="10000 Steps"
            src={heart}
            style={{ backgroundColor: "#55ae95" }}
          />

          <Health
            current="2000 Steps"
            title="BigTitle"
            goal="10000 Steps"
            src={heart}
            style={{ backgroundColor: "#f39422" }}
          />

          <Health
            current="2000 Steps"
            title="BigTitle"
            goal="10000 Steps"
            src={heart}
            style={{ backgroundColor: "#eef5b2" }}
          />

          <Health
            current="2000 Steps"
            title="BigTitle"
            goal="10000 Steps"
            src={heart}
            style={{ backgroundColor: "#fb5b5a" }}
          />

          <Health
            current="2000 Steps"
            title="BigTitle"
            goal="10000 Steps"
            src={heart}
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

    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1"
  },
  scroll: {
    flexGrow: 1
  }
});
