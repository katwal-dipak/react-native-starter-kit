import React, { Fragment, Component } from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import { Avatar, Icon, Button, PricingCard, Card } from "react-native-elements";

class ReactNativeElements extends Component {
  render() {
    return (
      <Fragment>
        <ScrollView>
          <View style={{ flexDirection: "column", paddingHorizontal: 10 }}>
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
            <View style={{ flexDirection: "column", marginVertical: 25 }}>
              <PricingCard
                color="#f50"
                title="Free"
                price="$0"
                info={["1 User", "Basic Support", "All Core Features"]}
                button={{
                  title: "GET STARTED",
                  icon: "flight-takeoff"
                }}
              />
            </View>
            <Card
              title="HELLO WORLD"
              image={{
                uri:
                  "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
              }}
            >
              <Text style={{ marginBottom: 10 }}>
                The idea with React Native Elements is more about component
                structure than actual design.
              </Text>
              <Button
                icon={<Icon name="code" color="#ffffff" />}
                buttonStyle={{
                  borderRadius: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 0,
                  backgroundColor: "#f50"
                }}
                title="VIEW NOW"
              />
            </Card>
          </View>
        </ScrollView>
      </Fragment>
    );
  }
}

export default ReactNativeElements;
