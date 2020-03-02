import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import MoviesScreen from "../screens/Movies";
import SearchScreen from "../screens/Search";
import TVScreen from "../screens/TV";
import { BG_COLOR } from "../constants/Color";

const TabNavigation = createBottomTabNavigator(
  {
    Movies: MoviesScreen,
    TV: TVScreen,
    Search: SearchScreen
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: BG_COLOR
      }
    }
  }
);

export default createAppContainer(TabNavigation);
