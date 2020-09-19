import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../ui/screens/home/home.screen";
import { PlayerScreen } from "../ui/screens/player/player.screen";
import { SearchScreen } from "../ui/screens/search/search.screen";

import { Dimensions } from "react-native";

import { BottomTab } from "../ui/components/bottom-tab/bottom-tab.component";

const DEVICE_WIDTH = Dimensions.get("window").width;

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomTab {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Player" component={PlayerScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
};
