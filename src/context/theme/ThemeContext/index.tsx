import React from "react";
import { ITheme } from "../../../@types/theme";

type Props = {
  children: React.ReactNode;
};

// Default value
const defaultValue = { dark: false };

const ThemeContext = React.createContext<ITheme>(defaultValue);

const ThemeProvider = ({ children }: Props) => {
  const [dark, setDark] = React.useState(defaultValue.dark);

  // Change theme
  const toggleTheme = React.useCallback(() => {
    if (dark) {
      setDark(false);
      localStorage.setItem("theme", "light");
    } else {
      setDark(true);
      localStorage.setItem("theme", "dark");
    }
  }, [dark]);

  React.useEffect(() => {
    if (!("theme" in localStorage) || localStorage.theme === "light") {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else if (
      localStorage.theme === "dark" ||
      window.matchMedia("(prefers-colors-scheme:dark)").matches
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  React.useEffect(() => {
    let curTheme = localStorage.theme === "dark" ? true : false;
    let defaultTheme = localStorage.getItem("theme") ? curTheme : false;
    setDark(defaultTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
export const useTheme = () => React.useContext(ThemeContext);
