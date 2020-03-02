import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import TabNavigator from "./TabNavigation";
import DetailScreen from "../screens/Detail";

const MainNavigation = createStackNavigator(
  {
    TabNavigator,
    Detail: DetailScreen
  },
  {
    initialRouteName: "TabNavigator"
  }
);

export default createAppContainer(MainNavigation);
