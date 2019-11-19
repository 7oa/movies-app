import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../../res/base";

const PageHeader = props => {
  return <View style={[styles.header, props.style]}>{props.children}</View>;
};

export default PageHeader;

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.blueWhale14
  }
});
