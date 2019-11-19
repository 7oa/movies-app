import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import PageWithNavBar from "../components/templates/PageWithNavBar";
import Gradient from "../components/elements/Gradient";
import { Button } from "../components/elements/Buttons";
import ItemsSlider from "../components/sliders/ItemsSlider";
import VideoItemsSlider from "../components/sliders/VideoItemsSlider";
import ScrollableNav from "../components/navigation/ScrollableNav";
import { colors } from "../res/base";
import { Favorites, Back, Clock } from "../components/elements/Icons";
import { withNavigation } from "react-navigation";

const Main = ({ navigation }) => {
  const favorite = false;
  return (
    <PageWithNavBar>
      <View>
        <Image
          style={styles.image}
          source={{
            uri:
              "https://cdn.onebauer.media/one/media/5d28/4cb8/e8e2/047d/8684/74c8/lion-king-main.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg"
          }}
        ></Image>
        <Gradient height={150} />
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={() => navigation.goBack()}
        >
          <Back />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonFavorites}>
          <Favorites color={favorite ? colors.green : colors.white} />
        </TouchableOpacity>
        <View style={styles.infoWrapper}>
          <View style={styles.rating}>
            <Text style={styles.ratingText}>9.0</Text>
          </View>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Название фильма</Text>
            <Text style={styles.tvzavr}>TVZAVR</Text>
          </View>
          <View style={styles.info}>
            <View style={styles.timeIcon}>
              <Clock />
            </View>
            <Text style={styles.time}>00 сезонов</Text>
            <ScrollView
              style={styles.tagsList}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
            >
              <Text style={styles.tag}>Комедия</Text>
              <Text style={styles.tag}>Триллер</Text>
              <Text style={styles.tag}>Драма</Text>
              <Text style={styles.tag}>Боевик</Text>
            </ScrollView>
          </View>
        </View>
      </View>
      <View style={styles.description}>
        <View style={styles.buttonWrapper}>
          <Button title="Смотреть трейлер" />
        </View>
        <Text style={styles.value}>
          Юная Астрид Линдгрен нарушила законы общества и следовала велению
          сердца. Ее ждали встречи и расставания, любовь и потери. Она подарила
          миру невероятные истории про Малыша и Карлсона, Пеппи Длинный чулок,
          Эмиля из Лённеберги.
        </Text>
        <Text style={styles.label}>Страна и год производства</Text>
        <Text style={styles.value}>Страна, 2000</Text>
        <Text style={styles.label}>Режиссёр</Text>
        <Text style={styles.value}>Имя Фамилия</Text>
        <Text style={styles.label}>Актёры</Text>
        <Text style={styles.value}>Имя Фамилия, Имя Фамилия, Имя Фамилия</Text>
      </View>
      <View style={styles.seasonsWrapper}>
        <View style={styles.seasonsNav}>
          <ScrollableNav
            data={[
              { title: "Сезон 1" },
              { title: "Сезон 2" },
              { title: "Сезон 3" },
              { title: "Сезон 4" },
              { title: "Сезон 5" }
            ]}
          />
        </View>
        <VideoItemsSlider />
      </View>
      <View>
        <Text style={styles.recomendationTitle}>Советуем посмотреть</Text>
        <ItemsSlider />
      </View>
    </PageWithNavBar>
  );
};

export default withNavigation(Main);

const styles = StyleSheet.create({
  buttonBack: {
    position: "absolute",
    top: 40,
    left: 15
  },
  buttonFavorites: {
    position: "absolute",
    top: 35,
    right: 15
  },
  image: {
    height: 293,
    width: "100%"
  },
  infoWrapper: {
    position: "absolute",
    bottom: 10,
    right: 0,
    left: 15
  },
  title: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 20
  },
  tvzavr: {
    color: colors.white,
    fontSize: 13,
    textTransform: "uppercase",
    borderWidth: 1,
    borderColor: colors.white,
    paddingHorizontal: 5,
    marginLeft: 20
  },
  rating: {
    backgroundColor: colors.green,
    paddingHorizontal: 10,
    alignSelf: "flex-start",
    borderRadius: 13,
    marginBottom: 5
  },
  ratingText: {
    color: colors.white,
    fontSize: 17,
    lineHeight: 25
  },
  tag: {
    color: colors.white,
    backgroundColor: colors.blueWhale24,
    fontSize: 13,
    lineHeight: 25,
    borderRadius: 12,
    paddingHorizontal: 10,
    marginHorizontal: 5
  },
  titleWrapper: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 14
  },
  timeIcon: {
    marginRight: 6
  },
  time: {
    color: colors.white,
    fontSize: 13,
    flexShrink: 0
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden"
  },
  tagsList: {
    marginLeft: 20
  },
  description: {
    padding: 15
  },
  label: {
    color: colors.blueHoki,
    fontSize: 13,
    lineHeight: 15,
    marginBottom: 5
  },
  value: {
    color: colors.white,
    fontSize: 15,
    lineHeight: 17,
    marginBottom: 10
  },
  buttonWrapper: {
    marginBottom: 15
  },
  recomendation: {
    marginBottom: 15
  },
  recomendationTitle: {
    color: colors.white,
    fontSize: 13,
    lineHeight: 15,
    marginBottom: 10,
    textTransform: "uppercase",
    paddingHorizontal: 15
  },
  seasonsWrapper: {
    marginBottom: 25
  },
  seasonsNav: {
    marginBottom: 15
  }
});
