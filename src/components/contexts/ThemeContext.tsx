import {
  createContext,
  Provider,
  ReactElement,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
} from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";

import { AchievementState, useAchievement } from "./AchievementContext";

interface ThemeProviderProps {
  children: ReactNode;
}

interface ThemeContextInterface {
  isDark: boolean;
  setIsDark: () => void;
}

const ThemeContext = createContext<ThemeContextInterface>({
  isDark: false,
  setIsDark: () => undefined,
});

const ThemeProvider = (
  props: ThemeProviderProps
): ReactElement<ThemeProviderProps, Provider<ThemeContextInterface>> => {
  const [isDark, setIsDark] = useLocalStorage<boolean>("isDark", false);
  const [isManuallyOverridden, setIsManuallyOverridden] =
    useLocalStorage<boolean>("isManuallyOverridden", false);
  const { hasFoundDarkMode, setHasFoundDarkMode } = useAchievement();

  const setThemeColor = useCallback((isDark: boolean) => {
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", isDark ? "#2c2f44" : "#ffffff");
  }, []);

  const setDefaultThemeColor = useCallback(() => {
    const preferDarkScheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (!isManuallyOverridden) {
      setIsDark(preferDarkScheme);
    }
  }, [isManuallyOverridden, setIsDark]);

  useEffect(() => {
    setDefaultThemeColor();
    const windowMatchDarkSchemeMedia = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    windowMatchDarkSchemeMedia.addEventListener("change", setDefaultThemeColor);

    return (): void => {
      windowMatchDarkSchemeMedia.removeEventListener(
        "change",
        setDefaultThemeColor
      );
    };
  }, [setDefaultThemeColor]);

  useEffect(() => {
    setThemeColor(isDark);
  }, [isDark, setThemeColor]);

  const updateIsDark = (): void => {
    setIsDark(!isDark);
    setIsManuallyOverridden(true);
    if (hasFoundDarkMode === AchievementState.NO) {
      setHasFoundDarkMode(AchievementState.JUST);
    }
  };

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark: updateIsDark }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

const useTheme = (): ThemeContextInterface => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeProvider, useTheme };
