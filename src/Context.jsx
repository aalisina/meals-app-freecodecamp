import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();

const MEAL_BY_NAME = "https://www.themealdb.com/api/json/v1/1/search.php?s=a";
const RANDOM_MEAL = "https://www.themealdb.com/api/json/v1/1/random.php";

const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);

  const fetchMeals = async (url) => {
    try {
      const { data } = await axios(url);
      setMeals(data.meals);
    } catch (error) {
      console.error(error.response);
    }
  };
  useEffect(() => {
    fetchMeals(MEAL_BY_NAME);
  }, []);

  const contextValue = {
    meals,
    setMeals,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

// Export a custom hook for the consumtion of the global context
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
