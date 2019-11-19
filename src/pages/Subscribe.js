import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import { Button } from "../components/elements/Buttons";
import { colors } from "../res/base";
import { Logo } from "../components/elements/Icons";

const Subscribe = () => {
  return (
    <View>
      <View style={styles.pageWrapper}>
        <View style={styles.logo}>
          <Logo />
        </View>

        <View style={styles.slider}>
          <View style={styles.slide}>
            <View style={styles.slideContent}>
              <Image
                source={{ uri: "https://picsum.photos/id/42/200/400" }}
                style={styles.slideImg}
              />

              <View style={styles.slideTitleWrapper}>
                <Text style={styles.slideTitle}>Свежие сериалы</Text>
                <Text style={styles.slideSubTitle}>4000 серий</Text>
              </View>
            </View>
          </View>
          <View style={styles.slide}>
            <View style={[styles.slideContent, styles.slideContentActive]}>
              <Image
                source={{ uri: "https://picsum.photos/id/43/200/400" }}
                style={styles.slideImg}
              />
              <View style={styles.slideTitleWrapper}>
                <Text style={styles.slideTitle}>Лучшее кино планеты</Text>
                <Text style={styles.slideSubTitle}>43 000 фильмов</Text>
              </View>
            </View>

            <Button title={"Смотреть"}></Button>
          </View>
          <View style={styles.slide}>
            <View style={styles.slideContent}>
              <Image
                source={{ uri: "https://picsum.photos/id/44/200/400" }}
                style={styles.slideImg}
              />
              <View style={styles.slideTitleWrapper}>
                <Text style={styles.slideTitle}>Качественные мультфильмы</Text>
                <Text style={styles.slideSubTitle}>3000 мультфильмов</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.sliderDots}>
          <View style={[styles.sliderDot, styles.sliderDotActive]}></View>
          <View style={styles.sliderDot}></View>
          <View style={styles.sliderDot}></View>
        </View>

        <View>
          <Text style={styles.tagline}>
            Эксклюзивные премьеры{"\n"}Отсутствие рекламы{"\n"}Максимальное
            качество
            {"\n"}
            Неограниченный просмотр
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Subscribe;

const styles = StyleSheet.create({
  pageWrapper: {
    paddingTop: 47,
    paddingBottom: 20
  },
  tagline: {
    color: colors.white,
    textAlign: "center"
  },
  logo: {
    alignItems: "center",
    marginBottom: 28
  },
  slide: {
    width: 180,
    height: 347,
    marginHorizontal: 9,
    justifyContent: "space-between"
  },
  slideContent: {
    width: "100%",
    height: 347
  },
  slideContentActive: {
    height: 279
  },
  slider: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "row",
    overflow: "hidden",
    marginBottom: 23
  },
  slideTitleWrapper: {
    position: "absolute",
    bottom: 30,
    right: 0,
    left: 0,
    marginHorizontal: "auto",
    paddingHorizontal: 10
  },
  slideTitle: {
    color: colors.white,
    textAlign: "center",
    fontSize: 20,
    lineHeight: 22,
    marginBottom: 10,
    fontWeight: "bold"
  },
  slideSubTitle: {
    color: colors.white,
    textAlign: "center",
    fontSize: 13,
    lineHeight: 15
  },
  slideImg: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    borderRadius: 10
  },
  sliderDots: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 18
  },
  sliderDot: {
    width: 8,
    height: 8,
    marginHorizontal: 4,
    borderRadius: 4,
    backgroundColor: colors.white,
    opacity: 0.16
  },
  sliderDotActive: {
    backgroundColor: colors.green,
    opacity: 1
  }
});
