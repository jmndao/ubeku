import React from "react";
import { GlobalContextType } from "../../@types/global";

type Props = {
  children: React.ReactNode;
};

const GlobalContext = React.createContext<GlobalContextType | undefined>(
  undefined
);

const GlobalProvider = ({ children }: Props) => {
  const [curMenu, setCurMenu] = React.useState("movies");
  const [curMovieTab, setCurMovieTab] = React.useState("started");

  const changeMenu = (val: string) => setCurMenu(val);
  const changeMovieTab = (val: string) => setCurMovieTab(val);

  return (
    <GlobalContext.Provider
      value={{
        curMenu,
        curMovieTab,
        changeMovieTab,
        changeMenu,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
export const useGlobal = () =>
  React.useContext(GlobalContext) as GlobalContextType;
