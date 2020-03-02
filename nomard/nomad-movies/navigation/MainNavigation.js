import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import TabNavigator from "./TabNavigation";
import DetailScreen from "../screens/Detail";
import { headerStyles } from "./config";
import styles from "../styles";

const MainNavigation = createStackNavigator(
  {
    Tabs: { screen: TabNavigator, navigationOptions: { headerShown: false } },
    Detail: {
      screen: DetailScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: styles.BG_COLOR,
          borderBottomWidth: 0
        },
        headerTitleStyle: {
          color: styles.TINT_COLOR
        },
        headerTintColor: styles.TINT_COLOR,
        headerBackTitleVisible: false
      }
    }
  },
  {
    initialRouteName: "Tabs"
  }
);

export default createAppContainer(MainNavigation);
