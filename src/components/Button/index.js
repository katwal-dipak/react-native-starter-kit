import React from "react";
import PropTypes from "prop-types";
import { View, TouchableHighlight, Text } from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";
import Icon from "react-native-vector-icons/FontAwesome";

const Button = ({ onPress, containerStyle, textStyle }) => {
  return (
    <TouchableHighlight
      //style={containerStyle}
      underlayColor="transparent"
      onPress={onPress}
    >
      <Icon.Button name="facebook" backgroundColor="#3b5998">
        <Text style={textStyle}>Login with Facebook</Text>
      </Icon.Button>
    </TouchableHighlight>
  );
};

Button.propTypes = {
  //
};

Button.defaultProps = {
  backgroundColor: "blue",
  textColor: "white",
  containerStyle: { backgroundColor: "blue" },
  textStyle: { color: "white" }
};

export default Button;
