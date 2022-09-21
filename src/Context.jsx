import { createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const valueObj = {
    what: "ever",
    where: "context for the entire app",
  };
  return <AppContext.Provider value={valueObj}>{children}</AppContext.Provider>;
};

// Export a custom hook for the consumtion of the global context
export const useGlobalContext = ()=> {
  return useContext(AppContext)
}

export { AppContext, AppProvider };
