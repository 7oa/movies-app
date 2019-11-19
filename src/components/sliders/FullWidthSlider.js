import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Animated
} from "react-native";
import { colors } from "../../res/base";
import Gradient from "../elements/Gradient";

const { width } = Dimensions.get("window");
const items = [
  {
    uri:
      "https://www.ivi.ru/titr/uploads/2015/11/13/c0a98b437cd5f06db2f7cf0a0e3f3ee6.jpg"
  },
  {
    uri:
      "https://www.ivi.ru/titr/uploads/2015/11/13/17e4a0e473e0fc49b3f11d886d3fc982.jpg"
  },
  {
    uri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRorEpgy67UpL34S027_zVGW95TUERF0r7vvsvbsJZqDaK5WImR2g&s"
  },
  {
    uri:
      "https://static.mk.ru/upload/entities/2017/10/18/articles/detailPicture/34/95/74/49/9ff4c41616131ae235fb2bbfb36d2d50.jpg"
  }
];

export default class FullWidthSlider extends React.Component {
  scrollX = new Animated.Value(0);
  render() {
    let position = Animated.divide(this.scrollX, width);
    return (
      <View>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { x: this.scrollX } } }
          ])}
          scrollEventThrottle={16}
          style={styles.slider}
        >
          {items.map((img, i) => {
            return (
              <View style={styles.item} key={i}>
                <View style={styles.imgWrapper}>
                  <Image source={img} style={styles.img}></Image>
                  <Gradient height={100} />
                </View>
                <View style={styles.description}>
                  <View style={styles.rating}>
                    <Text style={styles.ratingText}>9.0</Text>
                  </View>
                  <Text style={styles.title} numberOfLines={1}>
                    Название{i}
                  </Text>
                  <Text style={styles.subTitle} numberOfLines={1}>
                    Жанр
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          {items.map((_, i) => {
            let color = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [colors.blueHoki, colors.green, colors.blueHoki],
              extrapolate: "clamp"
            });

            return (
              <Animated.View
                key={i}
                style={{
                  height: 8,
                  width: 8,
                  backgroundColor: color,
                  marginHorizontal: 5,
                  borderRadius: 4
                }}
              />
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slider: {
    backgroundColor: colors.blueWhale23,
    width: "100%",
    marginBottom: 10
  },
  item: {
    width: width,
    height: 193
  },
  imgWrapper: {
    width: "100%",
    height: "100%"
  },
  img: {
    width: "100%",
    height: "100%"
  },
  gradient: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0
  },
  description: {
    position: "absolute",
    bottom: 11,
    left: 15
  },
  rating: {
    backgroundColor: colors.green,
    paddingHorizontal: 10,
    alignSelf: "flex-start",
    borderRadius: 13
  },
  ratingText: {
    color: colors.white,
    fontSize: 17,
    lineHeight: 25
  },
  title: {
    color: colors.white,
    fontSize: 20
  },
  subTitle: {
    color: colors.white,
    fontSize: 13
  }
});
