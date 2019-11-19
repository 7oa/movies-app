import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { colors } from "../../res/base";

const CategoryNav = () => {
  return (
    <View style={styles.navList}>
      <TouchableOpacity style={[styles.navItem, styles.navItemSelected]}>
        <Text style={styles.navItemText}>Фильмы</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.navItemText}>Сериалы</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.navItemText}>Мультфильмы</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryNav;

const styles = StyleSheet.create({
  navList: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 5,
    borderBottomColor: colors.blueWhale23
  },
  navItem: {
    flex: 1,
    paddingBottom: 7,
    paddingTop: 2,
    borderBottomWidth: 5,
    borderBottomColor: "transparent",
    top: 5
  },
  navItemSelected: {
    borderBottomColor: colors.green
  },
  navItemText: {
    color: colors.white,
    fontSize: 15,
    lineHeight: 17,
    textAlign: "center"
  }
});
