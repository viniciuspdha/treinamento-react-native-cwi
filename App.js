import "react-native-gesture-handler";
import { SafeAreaView } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { TabNavigation } from "./src/navigation/tab.navigation";

import { ThemeProvider } from "./src/contexts/theme-provider";

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
