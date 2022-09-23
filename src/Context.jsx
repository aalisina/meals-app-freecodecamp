import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();

const MEAL_BY_NAME = "https://www.themealdb.com/api/json/v1/1/search.php?s=a";
const RANDOM_MEAL = "https://www.themealdb.com/api/json/v1/1/random.php";

const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMeals = async (url) => {
    setLoading(true);
    try {
      const { data } = await axios(url);
      if (data.meals) {
        setMeals(data.meals);
      } else {
        setMeals([]);
      }
    } catch (error) {
      console.error(error.response);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchMeals(MEAL_BY_NAME);
  }, []);

  const contextValue = {
    meals,
    setMeals,
    loading,
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
