import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet
} from "react-native";
import HeaderLogo from "../components/elements/HeaderLogo";
import PageWithNavBar from "../components/templates/PageWithNavBar";
import PageHeader from "../components/templates/PageHeader";
import CategoryNav from "../components/navigation/CategoryNav";
import ItemsSlider from "../components/sliders/ItemsSlider";
import { Dictation } from "../components/elements/Icons";
import Switch from "../components/elements/Switch";
import { colors } from "../res/base";
import { Arrow, SearchIcon } from "../components/elements/Icons";

const Search = () => {
  const selectOpen = false;
  return (
    <PageWithNavBar>
      <PageHeader>
        <HeaderLogo />
        <CategoryNav />
      </PageHeader>
      <View>
        <View style={styles.searchWrapper}>
          <View style={styles.search}>
            <View style={styles.searchIconWrapper}>
              <SearchIcon />
            </View>
            <TextInput
              style={styles.searchInput}
              placeholder="Поиск"
              placeholderTextColor={colors.white}
            />

            <TouchableOpacity style={styles.dictationButton}>
              <Dictation color={colors.blueHoki} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.filtersWrapper}>
          <Text style={styles.filtersTitle}>Фильтры</Text>

          <View style={[styles.select, selectOpen && { zIndex: 2 }]}>
            <Text style={styles.selectLabel}>Страна</Text>
            <View style={styles.selectValueWrapper}>
              <Text style={[styles.selectValue, styles.selectValueSelected]}>
                США
              </Text>
              <View
                style={[styles.arrowIcon, selectOpen && styles.arrowIconOpen]}
              >
                <Arrow />
              </View>
            </View>
            {selectOpen && (
              <ScrollView style={styles.selectOptionsList}>
                <Text style={styles.selectOptionGroupTitle}>A</Text>
                <TouchableOpacity style={styles.selectOption}>
                  <Text style={styles.selectOptionValue}>Аргентина</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.selectOption}>
                  <Text style={styles.selectOptionValue}>Аргентина</Text>
                </TouchableOpacity>
                <Text style={styles.selectOptionGroupTitle}>Б</Text>
                <TouchableOpacity style={styles.selectOption}>
                  <Text style={styles.selectOptionValue}>Бразилия</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.selectOption}>
                  <Text style={styles.selectOptionValue}>Бразилия</Text>
                </TouchableOpacity>
              </ScrollView>
            )}
          </View>
          <View style={styles.select}>
            <Text style={styles.selectLabel}>Жанр</Text>
            <View style={styles.selectValueWrapper}>
              <Text style={styles.selectValue}>Не выбрано</Text>
              <View style={styles.arrowIcon}>
                <Arrow />
              </View>
            </View>
          </View>
          <View style={styles.select}>
            <Text style={styles.selectLabel}>Субтитры</Text>
            <Switch value={false} />
          </View>
          <View style={styles.select}>
            <Text style={styles.selectLabel}>На языке оригинала</Text>
            <Switch value={true} />
          </View>

          <View style={styles.yearsWrapper}>
            <View style={styles.year}>
              <View style={styles.yearLine}></View>
              <View style={styles.yearPoint} />
              <Text style={[styles.yearLabel, { left: 0 }]}>1970</Text>
            </View>

            <View style={styles.year}>
              <View style={styles.yearLine}></View>
              <View style={styles.yearPoint} />
              <Text style={styles.yearLabel}>1980</Text>
            </View>
            <View style={styles.year}>
              <View style={[styles.yearLine, styles.yearLineSelected]}></View>
              <View style={[styles.yearPoint, styles.yearPointSelected]} />
              <Text style={[styles.yearLabel, styles.yearLabelSelected]}>
                1990
              </Text>
            </View>
            <View style={styles.year}>
              <View style={styles.yearLine}></View>
              <View style={[styles.yearPoint, styles.yearPointSelected]} />
              <Text style={[styles.yearLabel, styles.yearLabelSelected]}>
                2000
              </Text>
            </View>
            <View style={styles.year}>
              <View style={[styles.yearLine, { width: "150%" }]}></View>
              <View style={styles.yearPoint} />
              <Text style={styles.yearLabel}>2010</Text>
            </View>
            <View style={[styles.year, styles.yearLast]}>
              <View style={styles.yearPoint} />
              <Text
                style={[
                  styles.yearLabel,
                  { left: 0, right: 0, width: 40, textAlign: "right" }
                ]}
              >
                2020
              </Text>
            </View>
          </View>

          <View style={styles.tagsLine}>
            <Text style={[styles.tag, styles.tagSelected]}>
              На языке оригинала
            </Text>
            <Text style={styles.tag}>С субтитрами</Text>
          </View>
        </View>

        <ItemsSlider />
      </View>
    </PageWithNavBar>
  );
};

export default Search;

const styles = StyleSheet.create({
  search: {
    height: 36,
    borderRadius: 10,
    backgroundColor: colors.blueWhale23,
    flexDirection: "row",
    alignItems: "center"
  },
  searchWrapper: {
    paddingHorizontal: 15,
    paddingVertical: 14,
    borderBottomColor: colors.blueWhale24,
    borderBottomWidth: 1
  },
  searchInput: {
    height: "100%",
    borderRadius: 10,
    color: colors.white,
    flexGrow: 1,
    paddingLeft: 40,
    paddingRight: 40,
    position: "relative"
  },
  searchIconWrapper: {
    position: "absolute",
    left: 10
  },
  filtersWrapper: {
    paddingTop: 10,
    paddingBottom: 15
  },
  filtersTitle: {
    color: colors.white,
    fontSize: 13,
    lineHeight: 15,
    paddingBottom: 10,
    textTransform: "uppercase",
    paddingHorizontal: 15
  },
  select: {
    height: 44,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.blueWhale23,
    paddingHorizontal: 15,
    marginBottom: 1
  },
  selectLabel: {
    color: colors.white,
    fontSize: 17,
    lineHeight: 19
  },
  selectValueWrapper: {
    flexDirection: "row",
    alignItems: "center"
  },
  selectValue: {
    color: colors.blueHoki,
    fontSize: 17,
    lineHeight: 22
  },
  selectValueSelected: {
    color: colors.green
  },
  selectOptionsList: {
    position: "absolute",
    top: "100%",
    right: 0,
    left: 0,
    backgroundColor: colors.blueTangaroa,
    maxHeight: 200
  },
  selectOption: {
    backgroundColor: colors.blueWhale23,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 1
  },
  selectOptionGroupTitle: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    color: colors.green,
    fontSize: 17
  },
  selectOptionValue: {
    color: colors.white,
    fontSize: 17
  },
  yearsWrapper: {
    paddingVertical: 20,
    marginHorizontal: 15,
    flexDirection: "row",
    overflow: "hidden"
  },
  year: {
    flex: 1,
    alignItems: "flex-start"
  },
  yearLast: {
    flex: 0.2,
    alignItems: "flex-end"
  },
  yearPoint: {
    width: 10,
    height: 10,
    backgroundColor: colors.white,
    borderRadius: 5,
    marginBottom: 10
  },
  yearPointSelected: {
    backgroundColor: colors.green,
    width: 15,
    height: 15,
    top: -2,
    marginBottom: 5,
    borderRadius: 8
  },
  yearLabel: {
    color: colors.white,
    fontSize: 13,
    lineHeight: 15,
    left: -8,
    position: "relative"
  },
  yearLabelSelected: {
    color: colors.green
  },
  yearLine: {
    borderBottomWidth: 2,
    borderBottomColor: colors.white,
    width: "100%",
    position: "absolute",
    top: 4,
    left: 10
  },
  yearLineSelected: {
    borderBottomColor: colors.green
    // borderStyle: "dashed"
  },
  dictationButton: {
    position: "absolute",
    right: 12
  },
  tagsLine: {
    flexDirection: "row",
    paddingHorizontal: 15
  },
  tag: {
    color: colors.white,
    fontSize: 13,
    lineHeight: 15,
    borderRadius: 15,
    backgroundColor: colors.blueWhale24,
    paddingHorizontal: 13,
    paddingVertical: 6,
    marginRight: 10
  },
  tagSelected: {
    backgroundColor: colors.green
  },
  arrowIcon: {
    height: 8,
    width: 13,
    marginLeft: 10
  },
  arrowIconOpen: {
    transform: [{ rotate: "180deg" }]
  }
});
