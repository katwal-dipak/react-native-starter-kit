import React, { Fragment, Component } from "react";
import { StyleSheet, View } from "react-native";
import SplashScreen from "react-native-splash-screen";

import Button from "../../components/Button";

class LoginContainer extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Fragment>
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <Button onPress={() => navigation.navigate("Home")} />
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    // backgroundColor: Colors.lighter
  }
});

export default LoginContainer;
