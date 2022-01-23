import {
  createContext,
  Provider,
  ReactElement,
  ReactNode,
  useContext,
} from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";

export enum AchievementState {
  YES = "YES",
  NO = "NO",
  JUST = "JUST",
}

interface AchievementProviderProps {
  children: ReactNode;
}

interface AchievementContextInterface {
  hasFoundDarkMode: AchievementState;
  setHasFoundDarkMode: (state: AchievementState) => void;
}

const AchievementContext = createContext<AchievementContextInterface>({
  hasFoundDarkMode: AchievementState.NO,
  setHasFoundDarkMode: (_: AchievementState) => undefined,
});

const AchievementProvider = (
  props: AchievementProviderProps
): ReactElement<
  AchievementProviderProps,
  Provider<AchievementContextInterface>
> => {
  const [hasFoundDarkMode, setHasFoundDarkMode] =
    useLocalStorage<AchievementState>("hasFoundDarkMode", AchievementState.NO);

  const updateHasFoundDarkMode = (state: AchievementState): void => {
    setHasFoundDarkMode(state);
  };

  return (
    <AchievementContext.Provider
      value={{ hasFoundDarkMode, setHasFoundDarkMode: updateHasFoundDarkMode }}
    >
      {props.children}
    </AchievementContext.Provider>
  );
};

const useAchievement = (): AchievementContextInterface => {
  const context = useContext(AchievementContext);
  if (context === undefined) {
    throw new Error("useAchievement must be used within a AchievementProvider");
  }
  return context;
};

export { AchievementProvider, useAchievement };
