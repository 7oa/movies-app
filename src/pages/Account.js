import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PageWithNavBar from "../components/templates/PageWithNavBar";
import PageHeader from "../components/templates/PageHeader";
import Switch from "../components/elements/Switch";
import { colors } from "../res/base";
import { ArrowRight } from "../components/elements/Icons";

const Account = () => {
  return (
    <PageWithNavBar>
      <PageHeader style={styles.header}>
        <Text style={styles.headerTitle}>Аккаунт</Text>
      </PageHeader>

      <View style={styles.bodyWrapper}>
        <View style={styles.container}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>История аккаунта</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Загрузки</Text>
            <View style={styles.select}>
              <ArrowRight />
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>История просмотров</Text>
            <View style={styles.select}>
              <ArrowRight />
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Настройки</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Уведомления</Text>
            <Switch value={true} />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Служба поддержки</Text>
            <View style={styles.select}>
              <ArrowRight />
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Контент</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Загрузка только по wi-fi</Text>
            <Switch value={true} />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Место для загрузок</Text>
            <View style={styles.select}>
              <Text style={styles.selectedValue}>SD карта</Text>
              <ArrowRight />
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Качество видео по умолчанию</Text>
            <View style={styles.select}>
              <Text style={styles.selectedValue}>HD 1080</Text>
              <ArrowRight />
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Показывать контент 18+</Text>
            <Switch
              value={false}
              ios_backgroundColor={colors.blueHoki}
              trackColor={{ false: colors.blueHoki, true: colors.green }}
            />
          </View>
        </View>
      </View>
    </PageWithNavBar>
  );
};

export default Account;

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 11
  },
  headerTitle: {
    color: colors.white,
    fontSize: 17,
    lineHeight: 19
  },
  bodyWrapper: {
    paddingTop: 15
  },
  titleWrapper: {
    borderBottomColor: colors.blueWhale24,
    borderBottomWidth: 1
  },
  title: {
    color: colors.blueHoki,
    fontSize: 13,
    lineHeight: 15,
    paddingBottom: 5,
    textTransform: "uppercase",
    paddingHorizontal: 15
  },
  label: {
    color: colors.white,
    fontSize: 17,
    lineHeight: 19
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 15,
    paddingVertical: 11,
    borderBottomColor: colors.blueWhale24,
    borderBottomWidth: 1
  },
  container: {
    marginBottom: 20
  },
  arrowIcon: {
    width: 8,
    height: 13
  },
  selectedValue: {
    color: colors.blueHoki,
    fontSize: 15,
    lineHeight: 17,
    marginRight: 12
  },
  select: {
    flexDirection: "row",
    alignItems: "center"
  }
});
