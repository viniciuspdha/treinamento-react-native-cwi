import React, { useState, useEffect } from "react";

import { View, Text, Switch, FlatList } from "react-native";
import { useTheme } from "../../../contexts/theme-provider";

import Reactotron from "reactotron-react-native";

export const SettingsScreen = ({ navigation }) => {
  const SettingsItem = ({ title, component: Component }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text>{title}</Text>
        <Component />
      </View>
    );
  };

  const themeSwitch = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const { themeString, toggleTheme } = useTheme();

    useEffect(() => {
      setIsEnabled(themeString === "dark" ? true : false);
    }, [themeString]);

    const toggleSwitch = () => {
      Reactotron.log(themeString);
      toggleTheme();
    };

    return (
      <Switch
        trackColor={{ false: "#767577", true: "#3F25E5" }}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          color: "#414141",
          fontSize: 32,
          paddingTop: 30,
          paddingBottom: 10,
          marginStart: 20,
        }}
      >
        Settings
      </Text>
      <View
        style={{ paddingHorizontal: 20, paddingBottom: 60, paddingTop: 20 }}
      >
        <SettingsItem title="Tema escuro" component={themeSwitch} />
      </View>
    </View>
  );
};
