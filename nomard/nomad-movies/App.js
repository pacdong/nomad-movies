import React from "react";
import { StatusBar } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import MainNavigation from "./navigation/MainNavigation";

export default class App extends React.Component {
  state = {
    loaded: false
  };

  handleError = error => console.log(error);
  handleLoaded = () => this.setState({ loaded: true });
  loadAssets = async () => {
    await Font.loadAsync({
      ...Ionicons.font
    });
    // await Asset.loadAsync([require("images/icon.png")]);  아이콘을 프리로드 하려면 이렇게 하면 된다.
  };
  render() {
    const { loaded } = this.state;
    if (loaded) {
      return (
        <>
          <StatusBar barStyle="light-content" />
          <MainNavigation />
        </>
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
