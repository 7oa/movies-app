import React from "react";
import { StyleSheet, View } from "react-native";
import Subscribe from "./pages/Subscribe";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Favorites from "./pages/Favorites";
import Search from "./pages/Search";
import Account from "./pages/Account";
import Popup from "./components/elements/Modal";
import { colors } from "./res/base";

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
});
