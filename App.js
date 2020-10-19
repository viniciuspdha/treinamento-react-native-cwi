import "react-native-gesture-handler";
import { SafeAreaView } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import Reactotron from "reactotron-react-native";

import { NavigationContainer } from "@react-navigation/native";
import { TabNavigation } from "./src/navigation/tab.navigation";

import { ThemeProvider } from "./src/contexts/theme-provider";
import { store } from "./src/state/store";

if (__DEV__) {
  import("./ReactotronConfig");
}

const App = () => {
  Reactotron.log("HELLO WORLD");

  return (
    <Provider store={store}>
      <ThemeProvider>
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
