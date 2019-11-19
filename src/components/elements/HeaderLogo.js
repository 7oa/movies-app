import React from "react";
import { StyleSheet, View } from "react-native";
import { Logo } from "../elements/Icons";

const HeaderLogo = () => {
  return (
    <View style={styles.logoWrapper}>
      <Logo />
    </View>
  );
};

export default HeaderLogo;

const styles = StyleSheet.create({
  logo: {
    width: 86,
    height: 25,
    marginHorizontal: "auto"
  },
  logoWrapper: {
    paddingTop: 30,
    paddingBottom: 23,
    alignItems: "center"
  }
});
