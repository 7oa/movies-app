import React from "react";
import { View, StyleSheet } from "react-native";
import HeaderLogo from "../components/elements/HeaderLogo";
import PageWithNavBar from "../components/templates/PageWithNavBar";
import PageHeader from "../components/templates/PageHeader";
import CategoryNav from "../components/navigation/CategoryNav";
import FullWidthSlider from "../components/sliders/FullWidthSlider";
import ItemsSlider from "../components/sliders/ItemsSlider";

const Main = () => {
  return (
    <PageWithNavBar>
      <PageHeader>
        <HeaderLogo />
        <CategoryNav />
      </PageHeader>

      <View style={styles.sliderWrapper}>
        <FullWidthSlider />
      </View>

      <ItemsSlider />
    </PageWithNavBar>
  );
};

export default Main;

const styles = StyleSheet.create({
  sliderWrapper: {
    marginBottom: 25
  }
});
