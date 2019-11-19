import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import CardItem from "../items/CardItem";

const ItemsSlider = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.slider}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
    >
      <CardItem disabled />
      {[...Array(10).keys()].map(i => (
        <CardItem key={i} />
      ))}
    </ScrollView>
  );
};

export default ItemsSlider;

const styles = StyleSheet.create({
  slider: {
    paddingHorizontal: 10
  }
});
