import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from "./screens/Home";
import ProfileScreen from "./screens/Profile";
import AnimalScreen from "./screens/Animal";
//import { Icon } from "react-native-elements";

const paw = require("./assets/paw.png");
const heart = require("./assets/heart.png");
const users = require("./assets/users.png");
import Paws from "./components/icons";

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Animal: { screen: AnimalScreen },
  Profile: { screen: ProfileScreen }
});

const App = createAppContainer(MainNavigator);

//export default App;
//Socail
//MyPet
//MyPetpro

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: " ",
        tabBarIcon: ({ tintColor }) => (
          <Paws src={users} style={{ width: 45 }} />
        )
      }
    },
    Animal: {
      screen: AnimalScreen,
      navigationOptions: {
        tabBarLabel: " ",
        tabBarIcon: ({ tintColor }) => <Paws src={paw} />
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: " ",
        tabBarIcon: ({ tintColor }) => <Paws src={heart} />
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#e91e63",
      labelStyle: {
        fontSize: 18,
        marginBottom: 12,
        color: "#434343",
        fontWeight: "bold"
      },
      style: {
        backgroundColor: "#ededed"
      }
    }
  }
);

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",

    backgroundColor: "#ecf0f1",
    padding: 8
  }
});
