import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const valueObj = {
    what: "ever",
    where: "context for the entire app",
  };
  return <AppContext.Provider value={valueObj}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
