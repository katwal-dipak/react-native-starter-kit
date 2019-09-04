/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";

import Button from "../../components/Button";

const LoginContainer = ({ navigation }) => {
  return (
    <Fragment>
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Button onPress={() => navigation.navigate("Home")} />
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    // backgroundColor: Colors.lighter
  }
});

export default LoginContainer;
