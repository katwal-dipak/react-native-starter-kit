import React, { Fragment, Component } from "react";
import { StyleSheet, View } from "react-native";
import SplashScreen from "react-native-splash-screen";
import { SocialIcon } from "react-native-elements";

class LoginContainer extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    const { navigation } = this.props;

    return (
      <Fragment>
        <View style={{ justifyContent: "center", flex: 1 }}>
          <SocialIcon
            title="Sign In With Facebook"
            button
            type="facebook"
            onPress={() => navigation.navigate("Home")}
            style={{ marginHorizontal: 50 }}
          />
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
