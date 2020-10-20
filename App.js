import "react-native-gesture-handler";
import { SafeAreaView } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import Reactotron from "reactotron-react-native";

import { NavigationContainer } from "@react-navigation/native";
import { TabNavigation } from "./src/navigation/tab.navigation";

import { ThemeProvider } from "./src/contexts/theme-provider";
import { store } from "./src/state/store";
import { CustomStatusBar } from "./src/ui/components/custom-status-bar/custom-status-bar.component";

if (__DEV__) {
  import("./ReactotronConfig");
}

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <CustomStatusBar />
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </SafeAreaView>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
