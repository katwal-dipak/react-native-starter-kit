import React, { Fragment } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";

import { styles } from "./styles";
import Fonts from "../../styles/Fonts";

const { favouriteCard, topListCard } = styles;

const FavListData = [
  {
    name: "1",
    imageURL:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/10/01/15/sc1827-571.jpg?w968h681"
  },
  {
    name: "2",
    imageURL:
      "https://cdn.vox-cdn.com/thumbor/7H-UkG1HYA8_AWAXBEK-Sod5CvM=/0x0:3000x2161/1200x675/filters:focal(1364x1124:1844x1604)/cdn.vox-cdn.com/uploads/chorus_image/image/57382215/Michel_ArnaudRajiv__7.0.jpg"
  },
  {
    name: "3",
    imageURL:
      "https://cdn.decoist.com/wp-content/uploads/2016/10/Modern-private-apartment-in-Milan-deisgned-by-Cristiana-Vannini.jpg"
  },
  {
    name: "4",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXPYfLDMm8Pla1OKmbe3CDzJNMBv15w8wTnLXcFGMGwH21b8YO"
  },
  {
    name: "5",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjiT7Wrbep-L4hRNAgqsb81hVi5ipqhU_h6fKYbnwXW80jBczVTw"
  },
  {
    name: "6",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjiT7Wrbep-L4hRNAgqsb81hVi5ipqhU_h6fKYbnwXW80jBczVTw"
  }
];

class Home extends React.Component {
  keyExtractor = (item, index) => index.toString();

  renderFavouriteCard = ({ item }) => {
    return (
      <View style={favouriteCard}>
        <Image
          style={favouriteCard}
          source={{ uri: item.imageURL }}
          resizeMode="cover"
        />
      </View>
    );
  };

  renderTopListCard = ({ item }) => {
    return (
      <View style={topListCard}>
        <Image
          style={topListCard}
          source={{ uri: item.imageURL }}
          resizeMode="cover"
        />
      </View>
    );
  };

  renderFavouriteList = () => {
    return (
      <View style={{ padding: 15 }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={FavListData}
          renderItem={this.renderFavouriteCard}
          keyExtractor={this.keyExtractor}
          horizontal
        />
      </View>
    );
  };

  renderTopList = () => {
    return (
      <View style={{ padding: 15, alignItems: "center" }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={FavListData}
          renderItem={this.renderTopListCard}
          keyExtractor={this.keyExtractor}
          horizontal
        />
      </View>
    );
  };

  render() {
    return (
      <Fragment>
        <Text
          style={{
            padding: 15,
            fontSize: 24,
            fontFamily: Fonts.DidactGothicRegular
          }}
        >
          Find Property
        </Text>
        {this.renderFavouriteList()}
        <Text
          style={{
            padding: 15,
            fontSize: 24,
            fontFamily: Fonts.DidactGothicRegular
          }}
        >
          Top Property
        </Text>
        {this.renderTopList()}
      </Fragment>
    );
  }
}

export default Home;
