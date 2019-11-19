import React from "react";
import { StyleSheet, ScrollView, Text, TouchableOpacity } from "react-native";
import { colors } from "../../res/base";

const ScrollableNav = ({ data }) => {
  return (
    <ScrollView
      contentContainerStyle={styles.nav}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
    >
      {data.map((item, i) => (
        <TouchableOpacity
          key={i}
          style={[styles.navItem, i === 0 && styles.navItemSelected]}
        >
          <Text
            style={[styles.navItemText, i === 0 && styles.navItemTextSelected]}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ScrollableNav;

const styles = StyleSheet.create({
  nav: {
    marginHorizontal: 15,
    borderBottomWidth: 5,
    borderBottomColor: colors.blueWhale23
  },
  navItem: {
    flex: 1,
    borderBottomWidth: 5,
    paddingBottom: 7,
    paddingTop: 2,
    marginRight: 5,
    borderBottomColor: "transparent",
    top: 5,
    paddingRight: 5
  },
  navItemSelected: {
    borderBottomColor: colors.green
  },
  navItemText: {
    color: colors.blueHoki,
    fontSize: 15,
    lineHeight: 17
  },
  navItemTextSelected: {
    color: colors.white
  }
});
