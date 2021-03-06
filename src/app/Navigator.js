import React from "react";
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import { StyleSheet } from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";

import Home from "../scene/Home/HomeContainer";
import Login from "../scene/Login/LoginContainer";
import GoogleMap from "../scene/Map/MapContainer";
import ReactNativeElements from "../scene/ReactNativeElements/ReactNativeElementsContainer";
import CustomFonts from "../scene/CustomFonts/CustomFontsContainer";
import LottieDemo from "../scene/Lottie/LottieDemo";

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
      title: "React Native Map"
    })
  }
});

const RNElementsNavigator = createStackNavigator({
  ReactNativeElements: {
    screen: ReactNativeElements,
    navigationOptions: props => ({
      title: "React Native Elements"
    })
  }
});

const CustomFontsNavigator = createStackNavigator({
  CustomFonts: {
    screen: CustomFonts,
    navigationOptions: props => ({
      title: "Custom Fonts"
    })
  }
});

const SettingsNavigator = createStackNavigator({
  LottieDemo: {
    screen: LottieDemo,
    navigationOptions: props => ({
      title: "Animation"
    })
  }
});

const TabNavigator = createBottomTabNavigator(
  {
    HOME: AppStackNavigator,
    MAP: GoogleMapStackNavigator,
    SELL: RNElementsNavigator,
    PREMIUM: CustomFontsNavigator,
    SETTINGS: SettingsNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;

        switch (routeName) {
          case "HOME":
            iconName = "search";
            break;

          case "MAP":
            iconName = "location";
            break;

          case "SELL":
            iconName = "plus";
            break;

          case "SETTINGS":
            iconName = "gear";
            break;

          case "PREMIUM":
            iconName = "heart";
            break;

          default:
            iconName = "gear";
            break;
        }

        return (
          <EvilIcons
            name={iconName}
            size={35}
            color={tintColor}
            style={{ marginTop: 5 }}
          />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "#f50",
      //inactiveTintColor: Black.tint25Percent,
      showLabel: false,
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
