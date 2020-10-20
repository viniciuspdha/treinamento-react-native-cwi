import React from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

import { useTheme } from "../../../contexts/theme-provider";

export const CustomStatusBar = () => {
  const { theme, themeString } = useTheme();

  return (
    <>
      <StatusBar style={themeString === "dark" ? "light" : "dark"} />
      <SafeAreaView style={{ backgroundColor: theme.colors.bodyBackground }} />
    </>
  );
};
