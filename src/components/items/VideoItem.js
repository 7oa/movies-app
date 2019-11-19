import React from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import { colors } from "../../res/base";
import { Play } from "../elements/Icons";

const ItemVideo = ({ disabled }) => {
  return (
    <View style={[styles.item, disabled && styles.itemDisabled]}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri:
              "https://i.pinimg.com/originals/be/58/6e/be586ef3844aaf93d5886a7cd94c33c1.jpg"
          }}
        ></Image>
        {!disabled && (
          <TouchableOpacity style={styles.buttonPlay}>
            <Play color={colors.green} />
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.title}>серия 1</Text>
      <Text style={styles.time}>45 минут</Text>
    </View>
  );
};

export default ItemVideo;

const styles = StyleSheet.create({
  item: {
    marginHorizontal: 5
  },
  itemDisabled: {
    opacity: 0.5
  },
  image: {
    width: 160,
    height: 90,
    borderRadius: 3,
    backgroundColor: colors.blueWhale23,
    marginBottom: 5
  },
  title: {
    color: colors.white,
    fontSize: 17,
    lineHeight: 19
  },
  time: {
    color: colors.blueHoki,
    fontSize: 13,
    lineHeight: 15
  },
  buttonPlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    alignItems: "center",
    justifyContent: "center"
  }
});
