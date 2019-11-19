import React from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import { colors } from "../../res/base";
import { withNavigation } from "react-navigation";

const ItemCard = ({ disabled, navigation }) => {
  return (
    <TouchableOpacity
      style={[styles.item, disabled && styles.itemDisabled]}
      onPress={() => navigation.navigate("Detail")}
    >
      <Image
        source={{
          uri:
            "https://st.kp.yandex.net/images/film_iphone/iphone360_1005878.jpg"
        }}
        style={styles.img}
      />
      <View style={styles.rating}>
        <Text style={styles.ratingText}>8.5</Text>
      </View>
      <Text style={styles.title} numberOfLines={1}>
        Король Лев
      </Text>
      <Text style={styles.genre} numberOfLines={1}>
        Мюзикл, драма, Триллер
      </Text>
    </TouchableOpacity>
  );
};

export default withNavigation(ItemCard);

const styles = StyleSheet.create({
  item: {
    width: 139,
    marginHorizontal: 5
  },
  itemDisabled: {
    opacity: 0.5
  },
  img: {
    borderRadius: 3,
    marginBottom: 5,
    width: 139,
    height: 206
  },
  title: {
    color: colors.white,
    fontSize: 17
  },
  genre: {
    color: colors.blueHoki,
    fontSize: 13
  },
  rating: {
    backgroundColor: colors.green,
    alignSelf: "flex-start",
    borderRadius: 11,
    position: "absolute",
    top: 10,
    left: 10,
    paddingHorizontal: 10
  },
  ratingText: {
    color: colors.white,
    fontSize: 15,
    lineHeight: 22
  }
});
