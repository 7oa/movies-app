import React from "react";
import {
  View,
  Text,
  Modal,
  Image,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { colors, images } from "../../res/base";

class Popup extends React.Component {
  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={this.state.modalVisible}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <View style={styles.messageWrapper}>
            {this.props.type === "warning" && (
              <Image source={images.warning} style={styles.icon} />
            )}
            {this.props.type === "error" && (
              <Image source={images.error} style={styles.icon} />
            )}
            {this.props.type === "success" && (
              <Image source={images.success} style={styles.icon} />
            )}
            <View style={styles.modalMessage}>
              <Text style={styles.title}>{this.props.title}</Text>
              <Text style={styles.subtitle}>{this.props.message}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}
          >
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}

export default Popup;

const styles = StyleSheet.create({
  modal: {
    backgroundColor: colors.green,
    borderWidth: 0,
    width: 270,
    height: 175,
    borderRadius: 10,
    position: "absolute",
    top: "30%",
    right: 0,
    left: 0,
    marginHorizontal: "auto"
  },
  modalMessage: {
    flexGrow: 1,
    justifyContent: "space-around"
  },
  icon: {
    width: 33,
    height: 33,
    alignSelf: "center"
  },
  title: {
    textAlign: "center",
    color: colors.white,
    fontSize: 17,
    lineHeight: 19
  },
  subtitle: {
    textAlign: "center",
    color: colors.white,
    fontSize: 15,
    lineHeight: 16
  },
  messageWrapper: {
    paddingVertical: 7,
    paddingHorizontal: 20,
    flexGrow: 1,
    borderBottomWidth: 1,
    borderBottomColor: colors.white
  },
  modalContent: {
    height: "100%",
    justifyContent: "space-between"
  },
  button: {
    padding: 11
  },
  buttonText: {
    color: colors.white,
    fontSize: 17,
    textAlign: "center"
  }
});
