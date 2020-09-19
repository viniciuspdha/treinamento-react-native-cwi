import { ThemeProvider } from "@react-navigation/native";

import React from "react";
import { View } from "react-native";

import { useTheme } from "../../contexts/theme-provider";

export const Surface = (props) => {
  const { theme } = useTheme();

  return (
    <View
      {...props}
      style={[{ backgroundColor: theme.colors.bodyBackground }, props.style]}
    />
  );
};
