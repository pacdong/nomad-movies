import { createStackNavigator } from "react-navigation-stack";
import styles from "../styles";

export const StackFactory = (screen, title) =>
  createStackNavigator({
    Screen: {
      screen,
      navigationOptions: {
        title,
        headerStyle: {
          backgroundColor: styles.BG_COLOR,
          borderBottomWidth: 0,
          shadowOffset: {
            height: 0
          }
        },
        headerTitleStyle: {
          color: styles.TINT_COLOR
        },
        headerTintColor: styles.TINT_COLOR
      }
    }
  });
