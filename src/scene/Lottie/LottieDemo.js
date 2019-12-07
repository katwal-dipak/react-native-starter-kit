import React, { Fragment, Component } from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import LottieView from "lottie-react-native";

class LottieDemo extends Component {
  render() {
    return (
      <LottieView
        source={require("../../../assets/lottie/lottie_taxi.json")}
        autoPlay
        loop
      />
    );
  }
}

export default LottieDemo;
