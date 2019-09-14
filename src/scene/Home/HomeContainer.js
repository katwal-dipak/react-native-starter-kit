import React, { Fragment, Component } from "react";
import { StyleSheet, Text } from "react-native";
import SplashScreen from "react-native-splash-screen";

import Home from "./Home";

class HomeContainer extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Fragment>
        <Home />
      </Fragment>
    );
  }
}

export default HomeContainer;
