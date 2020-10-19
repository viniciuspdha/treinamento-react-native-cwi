import React from "react";
import { View, ActivityIndicator } from "react-native";

export const Loader = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator color="#3f25e5" size="large" />
    </View>
  );
};
