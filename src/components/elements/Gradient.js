import React from "react";
import { View } from "react-native";

const Gradient = ({ height }) => {
  const gradientHeight = height;
  const gradientBackground = "black";
  const data = Array.from({ length: gradientHeight });
  return (
    <View>
      {data.map((_, i) => (
        <View
          key={i}
          style={{
            position: "absolute",
            backgroundColor: gradientBackground,
            height: 1,
            bottom: gradientHeight - (i + 1),
            right: 0,
            left: 0,
            opacity: (1 / gradientHeight) * (i + 1)
          }}
        />
      ))}
    </View>
  );
};

export default Gradient;
