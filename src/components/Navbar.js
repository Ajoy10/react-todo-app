import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BulbOutlined } from "@ant-design/icons";

export default function Navbar() {
  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { isLightTheme, light, dark, toggleTheme } = context;
        const theme = isLightTheme ? light : dark;

        return (
          <nav style={{ color: theme.text, backgroundColor: theme.secondary }}>
            <h3>Todo App</h3>
            <button
              style={{ backgroundColor: theme.background }}
              onClick={() => toggleTheme()}
            >
              <BulbOutlined style={{ color: theme.text }} />
            </button>
          </nav>
        );
      }}
    </ThemeContext.Consumer>
  );
}
