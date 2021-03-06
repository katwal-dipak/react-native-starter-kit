import { StyleSheet } from "react-native";

import { screenWidth } from "../../utilities/ScreenSize";

const favouriteCardWidth = screenWidth * 0.8;
const favouriteCardHeight = favouriteCardWidth * 0.8;
const topListCardWidth = screenWidth * 0.4;
const topListCardHeight = topListCardWidth * 0.8;

export const styles = StyleSheet.create({
  favouriteCard: {
    width: favouriteCardWidth,
    height: favouriteCardHeight,
    backgroundColor: "#F7F7F7",
    marginRight: 15
  },
  topListCard: {
    width: topListCardWidth,
    height: topListCardHeight,
    backgroundColor: "#F7F7F7",
    padding: 5
  }
});
