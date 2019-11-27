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
import ReactNativeElements from "../scene/ReactNativeElements/ReactNativeElementsContainer";

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
      title: "React Native Maps"
      // https://reactnavigation.org/docs/navigators/stack check this for styles
    })
  }
});

const RNElementsNavigator = createStackNavigator({
  GoogleMap: {
    screen: ReactNativeElements,
    navigationOptions: props => ({
      title: "React Native Elements"
      // https://reactnavigation.org/docs/navigators/stack check this for styles
    })
  }
});

const TabNavigator = createBottomTabNavigator(
  {
    HOME: AppStackNavigator,
    MAP: GoogleMapStackNavigator,
    SELL: RNElementsNavigator,
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
