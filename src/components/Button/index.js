import React from "react";
import PropTypes from "prop-types";
import { View, TouchableHighlight, Text } from "react-native";

const Button = ({ onPress }) => {
  return (
    <TouchableHighlight
      style={{ backgroundColor: "black" }}
      underlayColor="transparent"
      onPress={onPress}
    >
      <Text style={{ padding: 25, color: "white" }}> LOGIN</Text>
    </TouchableHighlight>
  );
};

Button.propTypes = {
  //
};

Button.defaultProps = {
  //
};

export default Button;
