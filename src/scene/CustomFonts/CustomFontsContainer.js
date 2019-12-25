import React, { Fragment, Component } from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import Fonts from "../../styles/Fonts";

class CustomFonts extends Component {
  render() {
    return (
      <Fragment>
        <ScrollView>
          <View
            style={{
              flexDirection: "column",
              paddingHorizontal: 15,
              paddingVertical: 15,
              justifyContent: "center"
              //alignItems: "center"
            }}
          >
            <Text
              style={{
                fontFamily: Fonts.DancingScriptOT,
                fontSize: 20,
                paddingVertical: 10
              }}
            >
              React Native Starter Kit
            </Text>
            <Text
              style={{
                fontFamily: Fonts.PoiretOneRegular,
                fontSize: 20,
                paddingVertical: 10
              }}
            >
              React Native Starter Kit
            </Text>
            <Text
              style={{
                fontFamily: Fonts.KaushanScriptRegular,
                fontSize: 20,
                paddingVertical: 10
              }}
            >
              React Native Starter Kit
            </Text>
            <Text
              style={{
                fontFamily: Fonts.AlfaSlabOneRegular,
                fontSize: 20,
                paddingVertical: 10
              }}
            >
              React Native Starter Kit
            </Text>
            <Text
              style={{
                fontFamily: Fonts.SacramentoRegular,
                fontSize: 20,
                paddingVertical: 10
              }}
            >
              React Native Starter Kit
            </Text>
            <Text
              style={{
                fontFamily: Fonts.DidactGothicRegular,
                fontSize: 20,
                paddingVertical: 10
              }}
            >
              React Native Starter Kit
            </Text>
            <Text
              style={{
                fontFamily: Fonts.MonotonRegular,
                fontSize: 20,
                paddingVertical: 10
              }}
            >
              React Native Starter Kit
            </Text>
            <Text
              style={{
                fontFamily: Fonts.LatoBold,
                fontSize: 20,
                paddingVertical: 10
              }}
            >
              React Native Starter Kit
            </Text>
          </View>
        </ScrollView>
      </Fragment>
    );
  }
}

export default CustomFonts;
