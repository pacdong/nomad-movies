import React from "react";
import { AppLoading, Font, Asset } from "expo";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { isFrontCameraAvailable } from "expo/build/AR";

export default class App extends React.Component {
  state = {
    loaded: false
  };

  handleError = error => console.log(error);
  handleLoaded = () => this.setState({ loaded: true });
  loadAssets = async () => {
    await isFrontCameraAvailable.loadAsync({
      ...Ionicons.font
    });
    // await Asset.loadAsync([require("images/icon.png")]);  아이콘을 프리로드 하려면 이렇게 하면 된다.
  };
  render() {
    const { loaded } = this.state;
    if (loaded) {
      return (
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      );
    } else {
      return (
        <AppLoading
          startAsync={this.loadAssets}
          onFinish={this.handleLoaded}
          onError={this.handleError}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
