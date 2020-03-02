import React from "react";
import { AppLoading, Font, Asset } from "expo";
import { Ionicons } from "@expo/vector-icons";
import { isFrontCameraAvailable } from "expo/build/AR";
import TabNavigation from "./navigation/TabNavigation";
import MainNavigation from "./navigation/MainNavigation";

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
      return <MainNavigation />;
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
