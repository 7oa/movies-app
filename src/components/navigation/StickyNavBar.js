import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Favorites, Catalog, Account, Search } from "../elements/Icons";
import { colors } from "../../res/base";

const StickyNavBar = () => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.navbarItem}>
        <Catalog color={colors.green} />
        <Text style={[styles.navbarLabel, styles.navbarLabelActive]}>
          Каталог
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navbarItem}>
        <Search color={colors.blueHoki} />
        <Text style={styles.navbarLabel}>Поиск</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navbarItem}>
        <Favorites color={colors.blueHoki} />
        <Text style={styles.navbarLabel}>Избранное</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navbarItem}>
        <Account color={colors.blueHoki} />
        <Text style={styles.navbarLabel}>Аккаунт</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StickyNavBar;

const styles = StyleSheet.create({
  navbar: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: colors.blueWhale23,
    height: 53,
    flexDirection: "row"
  },
  navbarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 3
  },
  navbarIcon: {
    color: colors.blueHoki,
    fontSize: 0
  },
  navbarIconActive: {
    color: colors.green
  },
  navbarLabel: {
    color: colors.blueHoki,
    fontSize: 11,
    marginTop: 3
  },
  navbarLabelActive: {
    color: colors.green
  }
});
