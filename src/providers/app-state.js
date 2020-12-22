import React, { useContext, useState, createContext } from "react";

const AppStateContext = createContext();

export function AppStateProvider({ children }) {
  const [searchValue, updateSearchValue] = useState("");
  const [shortlist, setShortList] = useState([]);
  const value = { searchValue, updateSearchValue, shortlist, setShortList };
  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error(
      "You probably forgot a <AppStateProvider> context provider"
    );
  }
  return context;
}
