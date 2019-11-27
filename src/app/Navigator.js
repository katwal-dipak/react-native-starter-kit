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
import GoogleMap from "../scene/Map/MapContainer";

const AppStackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: props => ({
      //header: null
      // https://reactnavigation.org/docs/navigators/stack check this for styles
    })
  }
});

const GoogleMapStackNavigator = createStackNavigator({
  GoogleMap: {
    screen: GoogleMap,
    navigationOptions: props => ({
      //header: null
      // https://reactnavigation.org/docs/navigators/stack check this for styles
    })
  }
});

const TabNavigator = createBottomTabNavigator(
  {
    HOME: AppStackNavigator,
    MAP: GoogleMapStackNavigator,
    SELL: AppStackNavigator,
    PREMIUM: AppStackNavigator,
    SETTINGS: AppStackNavigator
  },
  {
    // defaultNavigationOptions: ({ navigation }) => ({}),
    tabBarOptions: {
      // activeTintColor: Black.tint75Percent,
      // inactiveTintColor: Black.tint25Percent,
      showLabel: true,
      style: { marginBottom: 5 }
    }
  }
);

const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: () => ({
      title: "Login"
    })
  }
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthStack,
      App: TabNavigator
    },
    {
      initialRouteName: "Auth"
    }
  )
);
