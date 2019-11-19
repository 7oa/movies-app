import React from "react";
import { StyleSheet, TouchableOpacity, Text, Image, View } from "react-native";
import { colors, images } from "../../res/base";

export const Button = ({ title, disabled }) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.buttonDisabled]}
    >
      <View style={styles.buttonWrapper}>
        <Text style={[styles.buttonText, disabled && styles.opacity]}>
          {title}
        </Text>
        <Image
          source={images.arrowRight}
          style={[styles.buttonIcon, disabled && styles.opacity]}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7
  },
  buttonDisabled: {
    backgroundColor: colors.blueWhale23
  },
  buttonWrapper: { flexDirection: "row", alignItems: "flex-end" },
  buttonText: {
    color: colors.white,
    textAlign: "center",
    fontSize: 17,
    lineHeight: 17
  },
  buttonIcon: {
    width: 8,
    height: 14,
    marginLeft: 8
  },
  opacity: {
    opacity: 0.47
  }
});
