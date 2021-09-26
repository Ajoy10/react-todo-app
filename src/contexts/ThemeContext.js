import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider(props) {
  const [themeData, setthemeData] = useState(
    () => {
      const localTheme = localStorage.getItem("isLightTheme");
      const _isLightTheme = localTheme ? JSON.parse(localTheme) : true;
      return {
        isLightTheme: _isLightTheme,
        light: {
          text: "#2A2B2F",
          accent: "#D0D0D0",
          background: "#ECECEC",
          secondary: "#E2DFDF",
          good: "#35834F",
          bad: "#B54141"
        },
        dark: {
          text: "#DDD",
          accent: "#121212",
          background: "#222",
          secondary: "#444444",
          good: "#35834F",
          bad: "#B54141"
        },
      }
    }
  );

  const ToggleTheme = () => {
    setthemeData({ ...themeData, isLightTheme: !themeData.isLightTheme });
  };

  useEffect(() => {
    localStorage.setItem("isLightTheme", JSON.stringify(themeData.isLightTheme));
  }, [themeData])

  return (
    <ThemeContext.Provider value={{ ...themeData, toggleTheme: ToggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
