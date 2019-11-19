import React from "react";
import { Switch } from "react-native";
import { colors } from "../../res/base";

const SwitchEl = ({ value }) => {
  return (
    <Switch
      value={value}
      thumbColor={colors.white}
      ios_backgroundColor={colors.blueHoki}
      trackColor={{ false: colors.blueHoki, true: colors.green }}
    />
  );
};

export default SwitchEl;
