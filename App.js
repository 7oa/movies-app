import React from "react";
import { Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";
//import Subscribe from "./src/pages/Subscribe";
import Main from "./src/pages/Main";
import Detail from "./src/pages/Detail";
import Favorites from "./src/pages/Favorites";
import Search from "./src/pages/Search";
import Account from "./src/pages/Account";
import Popup from "./src/components/elements/Modal";
import { colors } from "./src/res/base";
import {
  Catalog,
  Search as SearchIcon,
  Account as AccountIcon,
  Favorites as FavoritesIcon
} from "./src/components/elements/Icons";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

const CatalogStack = createSwitchNavigator({
  Catalog: {
    screen: Main
  },
  Detail: {
    screen: Detail
  }
});

const routes = {
  Catalog: {
    screen: CatalogStack,
    navigationOptions: {
      tabBarLabel: "Каталог",
      tabBarIcon: ({ tintColor }) => <Catalog color={tintColor} />
    }
  },
  Search: {
    screen: Search,
    navigationOptions: {
      tabBarLabel: "Поиск",
      tabBarIcon: ({ tintColor }) => <SearchIcon color={tintColor} />
    }
  },
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      tabBarLabel: "Избранное",
      tabBarIcon: ({ tintColor }) => <FavoritesIcon color={tintColor} />
    }
  },
  Account: {
    screen: Account,
    navigationOptions: {
      tabBarLabel: "Аккаунт",
      tabBarIcon: ({ tintColor }) => <AccountIcon color={tintColor} />
    }
  }
};

const App = createBottomTabNavigator(routes, {
  initialRouteName: "Catalog",
  tabBarOptions: {
    activeTintColor: colors.green,
    inactiveTintColor: colors.blueHoki,
    style: { backgroundColor: colors.blueWhale14, borderTopWidth: 0 }
  }
});

export default createAppContainer(App);

/*
function App() {
  return (
    <View style={styles.MainContainer}>
      <Main />
      <Popup
        type={"warning"}
        title={"Нет подключения к сети"}
        message={"Пожалуйста, проверьте интернет-соединение"}
      />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: colors.blueTangaroa,
    height: "100%"
  }
});*/
