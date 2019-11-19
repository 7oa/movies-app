import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import PageWithNavBar from "../components/templates/PageWithNavBar";
import PageHeader from "../components/templates/PageHeader";
import ItemsSlider from "../components/sliders/ItemsSlider";
import { colors } from "../res/base";
import { Plus } from "../components/elements/Icons";

const Favorites = () => {
  return (
    <PageWithNavBar>
      <PageHeader style={styles.header}>
        <Text style={styles.title}>Избранное</Text>
        <TouchableOpacity style={styles.buttonAdd}>
          <Plus />
        </TouchableOpacity>
      </PageHeader>

      <View style={styles.bodyWrapper}>
        <View style={styles.blockWrapper}>
          <View style={styles.blockHeader}>
            <Text style={styles.blockTitle}>Сериалы</Text>
            <Text style={styles.editText}>Ред</Text>
          </View>
          <ItemsSlider />
        </View>
        <View style={styles.blockWrapper}>
          <View style={styles.blockHeader}>
            <Text style={styles.blockTitle}>Посмотреть в отпуске</Text>
            <Text style={styles.editText}>Ред</Text>
          </View>
          <ItemsSlider />
        </View>
      </View>
    </PageWithNavBar>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 11
  },
  title: {
    color: colors.white,
    fontSize: 17,
    lineHeight: 19
  },
  bodyWrapper: {
    paddingTop: 15
  },
  blockWrapper: {
    marginBottom: 15
  },
  blockHeader: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  blockTitle: {
    color: colors.blueHoki,
    fontSize: 13,
    lineHeight: 15,
    marginBottom: 10,
    textTransform: "uppercase",
    paddingHorizontal: 15
  },
  editText: {
    color: colors.green,
    fontSize: 13,
    lineHeight: 15,
    paddingHorizontal: 15
  },
  buttonAdd: {
    position: "absolute",
    right: 15,
    bottom: 10
  }
});
