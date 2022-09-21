import { useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const valueObj = {
    what: "ever",
    where: "context for the entire app",
  };
  return <AppContext.Provider value={valueObj}>{children}</AppContext.Provider>;
};
