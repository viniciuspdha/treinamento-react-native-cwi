import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import AsyncStorage from "@react-native-community/async-storage";

import { DefaultTheme } from "../themes/default-theme";
import { DarkTheme } from "../themes/dark-theme";

const ThemeContext = createContext();

const PREFERENCES_KEY = "@preferences";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(DefaultTheme);
  const [themeString, setThemeString] = useState("light");

  useEffect(() => {
    const restorePreferences = async () => {
      const prefsString = await AsyncStorage.getItem(PREFERENCES_KEY);
      const preferences = JSON.parse(prefsString);

      const currentTheme =
        preferences.theme === "dark" ? DarkTheme : DefaultTheme;

      setThemeString(preferences.theme);
      setTheme(currentTheme);
    };

    restorePreferences();
  }, []);

  useEffect(() => {
    const savePreferences = async () => {
      const preferences = {
        theme: theme === DarkTheme ? "dark" : "light",
      };

      await AsyncStorage.setItem(PREFERENCES_KEY, JSON.stringify(preferences));
    };
    savePreferences();
  }, [theme]);

  const toggleTheme = () => {
    setThemeString((theme) => (theme === "dark" ? "light" : "dark"));
    setTheme((theme) => (theme === DarkTheme ? DefaultTheme : DarkTheme));
  };

  const value = useMemo(
    () => ({
      theme,
      themeString,
      toggleTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);

  if (ctx === undefined) {
    throw new Error("useTheme must be used inside a ThemeContext");
  }

  return {
    theme: ctx.theme,
    themeString: ctx.themeString,
    toggleTheme: ctx.toggleTheme,
  };
};
