import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import * as Font from "expo-font";
// You can import from local files

// or any pure javascript modules available in npm

export default class FriendsScreen extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      Montserrat: require("../assets/fonts/Montserrat.ttf"),
      Rob: require("../assets/fonts/Roboto-Regular.ttf"),
      RobT: require("../assets/fonts/Roboto-Thin.ttf"),
      com: require("../assets/fonts/comfart.ttf")
    });

    this.setState({ fontLoaded: true });
  }

  static navigationOptions = {
    title: "About Us",
    headerStyle: {
      backgroundColor: "#33ac9b"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  render() {
    return (
      <View style={styles.container}>
        {this.state.fontLoaded ? (
          <Text style={styles.header}>
            <Text style={styles.heading}>We</Text>
            <Text style={styles.headin}>Care</Text>
          </Text>
        ) : null}
        {this.state.fontLoaded ? (
          <Text style={[styles.play, styles.first]}>
            A dog <Text style={styles.change}>health/fitness </Text> band, which
            tracks the dog’s
            <Text style={styles.change}>
              activity, heart rate, sleep schedule,
            </Text>{" "}
            etc. And provides early insight on any unusual behaviors using a
            sophisticated<Text style={styles.change}> neural network</Text> and{" "}
            <Text style={styles.change}>deep learning.</Text>
          </Text>
        ) : null}
        {this.state.fontLoaded ? (
          <Text style={styles.play}>
            5% of all profits are donated to the cause of providing loving homes
            to stray dogs.
          </Text>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ecf0f1",
    padding: 8
  },
  first: {
    marginTop: 50
  },
  play: {
    fontFamily: "com",
    fontSize: 19,
    marginHorizontal: 20,
    marginVertical: 4,
    textAlign: "center"
  },
  change: {
    color: "#33ac9b"
  },
  heading: {
    fontFamily: "com",
    color: "#33ac9b"
  },
  headin: {
    fontFamily: "com",
    color: "black"
  },
  header: {
    fontSize: 35,
    marginTop: 30
  }
});
