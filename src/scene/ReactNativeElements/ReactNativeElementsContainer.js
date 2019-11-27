import React, { Fragment, Component } from "react";
import { StyleSheet, Text } from "react-native";
import { Avatar } from "react-native-elements";

class ReactNativeElements extends Component {
  render() {
    return (
      <Fragment>
        <Avatar
          rounded
          source={{
            uri:
              "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
          }}
        />
      </Fragment>
    );
  }
}

export default ReactNativeElements;
