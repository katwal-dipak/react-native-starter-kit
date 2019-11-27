import React, { Fragment, Component } from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import { Avatar, Icon, Badge } from "react-native-elements";
import Fonts from "../../styles/Fonts";

class ReactNativeElements extends Component {
  render() {
    return (
      <Fragment>
        <ScrollView>
          <View style={{ flexDirection: "column", paddingHorizontal: 10 }}>
            <Text
              style={{
                fontSize: 25,
                marginTop: 5,
                fontFamily: Fonts.DancingScriptOT
              }}
            >
              React Native Elements
            </Text>
            <View
              style={{
                flexDirection: "row",
                padding: 15,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Icon raised name="pie-chart" type="font-awesome" color="#f50" />
              <Icon raised name="area-chart" type="font-awesome" color="#f50" />
              <Icon raised name="line-chart" type="font-awesome" color="#f50" />
              <Icon raised name="sellsy" type="font-awesome" color="#f50" />
              <Icon
                raised
                name="connectdevelop"
                type="font-awesome"
                color="#f50"
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Avatar
                rounded
                source={{
                  uri: "https://randomuser.me/api/portraits/men/41.jpg"
                }}
                size="large"
                containerStyle={{ marginHorizontal: 10 }}
              />
              <Avatar
                rounded
                source={{
                  uri:
                    "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
                }}
                size="large"
                containerStyle={{ marginHorizontal: 10 }}
              />
              <Avatar
                rounded
                source={{
                  uri:
                    "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
                }}
                showEditButton
                size="large"
              />
            </View>
          </View>
        </ScrollView>
      </Fragment>
    );
  }
}

export default ReactNativeElements;
