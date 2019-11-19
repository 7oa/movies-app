import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import VideoItem from "../items/VideoItem";

const VideoItemsSlider = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.slider}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
    >
      <VideoItem disabled />
      {[...Array(10).keys()].map(i => (
        <VideoItem key={i} />
      ))}
    </ScrollView>
  );
};

export default VideoItemsSlider;

const styles = StyleSheet.create({
  slider: {
    paddingHorizontal: 10
  }
});
