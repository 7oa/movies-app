import React from "react";
import { StyleSheet, View, ScrollView, StatusBar } from "react-native";
//import StickyNavBar from "../navigation/StickyNavBar";
import { colors } from "../../res/base";

const PageWithNavBar = props => {
  return (
    <View style={styles.pageWrapper}>
      <StatusBar
        backgroundColor={colors.blueTangaroa}
        barStyle="light-content"
      />
      <View style={styles.pageContent}>
        <ScrollView contentContainerStyle={styles.pageContainer}>
          {props.children}
        </ScrollView>
      </View>
      {/* <StickyNavBar /> */}
    </View>
  );
};

export default PageWithNavBar;

const styles = StyleSheet.create({
  pageWrapper: {
    height: "100%"
  },
  pageContent: {
    flexGrow: 1,
    // paddingBottom: 53,
    backgroundColor: colors.blueTangaroa
  },
  pageContainer: {
    paddingBottom: 20
  }
});
