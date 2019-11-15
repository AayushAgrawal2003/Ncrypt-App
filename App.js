import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from "./screens/Home";
import ProfileScreen from "./screens/Profile";
import AnimalScreen from "./screens/Animal";
import HealthScreen from "./screens/HealthS";
import AboutScreen from "./screens/About";
import FriendsScreen from "./screens/Friends";
//import { Icon } from "react-native-elements";

const paw = require("./assets/paw.png");
const heart = require("./assets/heart.png");
const users = require("./assets/users.png");

import Paws from "./components/icons";

const MainNavigator = createStackNavigator({
  Health: { screen: HealthScreen },
  Profile: { screen: ProfileScreen },
  Animal: {
    screen: AnimalScreen
  }
});

const NewNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  About: {
    screen: AboutScreen
  }
});

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: NewNavigator,
      navigationOptions: {
        tabBarLabel: " ",
        tabBarIcon: ({ tintColor }) => <Paws src={paw} />
      }
    },
    Friends: {
      screen: FriendsScreen,
      navigationOptions: {
        tabBarLabel: " ",
        tabBarIcon: ({ tintColor }) => (
          <Paws src={users} style={{ width: 45 }} />
        )
      }
    },
    Health: {
      screen: MainNavigator,
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
// const App = createAppContainer(MainNavigator);
export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",

    backgroundColor: "#ecf0f1",
    padding: 8
  }
});
