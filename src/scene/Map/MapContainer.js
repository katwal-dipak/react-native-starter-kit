import React, { Fragment } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const MapContainer = () => {
  return (
    <Fragment>
      <View style={{ flex: 1 }}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        />
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    // backgroundColor: Colors.lighter
  }
});

export default MapContainer;
