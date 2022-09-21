import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  const valueObj = {
    what: "ever",
    where: "context for the entire app",
    user,
    setUser,
  };
  const fetchUser = async () => {
    const res = await fetch("https://randomuser.me/api/");
    const json = await res.json();
    const user = json.results[0];
    setUser(user);
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return <AppContext.Provider value={valueObj}>{children}</AppContext.Provider>;
};

// Export a custom hook for the consumtion of the global context
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
