import React from "react";
import { ListIcon, PlayIcon, SearchIcon, CogIcon } from "../../../assets/icons";

import styles from "./bottom-tab.style";
import { View, TouchableOpacity } from "react-native";

const ICONS = {
  Home: ListIcon,
  Player: PlayIcon,
  Search: SearchIcon,
  Settings: CogIcon,
};

export const BottomTab = ({ navigation, state }) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const color = isFocused ? "white" : "rgba(255,255,255,0.5)";

        const Icon = ICONS[route.name];

        const onPress = () => {
          navigation.navigate(route.name);
        };

        return (
          <TouchableOpacity onPress={onPress} key={route.name}>
            <View style={styles.button}>{Icon && <Icon fill={color} />}</View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
