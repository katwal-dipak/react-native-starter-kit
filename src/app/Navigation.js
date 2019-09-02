import React from "react";
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import { StyleSheet } from "react-native";

import Home from "../scene/Home/HomeContainer";
import Login from "../scene/Login/LoginContainer";

const AppStackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: props => ({
      // header: null
      // https://reactnavigation.org/docs/navigators/stack check this for styles
    })
  }
});

const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: () => ({
      title: "Login"
    })
  }
});

const TabNavigator = createBottomTabNavigator(
  {
    HOME: AppStackNavigator
    // EXPLORE: ESStackNavigator,
    // SELL: ExploreStackNavigator,
    // PREMIUM: PremiumAdStackNavigator,
    // SETTINGS: SettingsStackNavigator
  },
  {
    // defaultNavigationOptions: ({ navigation }) => ({}),
    tabBarOptions: {
      // activeTintColor: Black.tint75Percent,
      // inactiveTintColor: Black.tint25Percent,
      showLabel: false,
      style: { marginBottom: 5 }
    }
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      App: TabNavigator,
      Auth: AuthStack
    },
    {
      initialRouteName: "App"
    }
  )
);
