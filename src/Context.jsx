import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();

const MEAL_BASE_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const RANDOM_MEAL_URL = "https://www.themealdb.com/api/json/v1/1/random.php";

const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  // set initial state temporarily to true to test
  const [showModal, setShowModal] = useState(false);
  let [selectedMeal, setSelectedMeal] = useState(null);

  const selectMealFunc = (idMeal, favoriteMeal) => {
    let meal;
    meal = meals.find((m) => m.idMeal === idMeal);
    setSelectedMeal(meal);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

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

  const fetchRandomMeal = () => {
    fetchMeals(RANDOM_MEAL_URL);
  };

  // In order to prevent a bug that is caused by the change in the searchTerm in handleRandomMeals
  // we add another useEffect to run the first time the app loads and another one tied to the search
  // term but with an early return in case the search term is empty.
  useEffect(() => {
    fetchMeals(MEAL_BASE_URL);
  }, []);

  useEffect(() => {
    if (!searchTerm) return;
    fetchMeals(`${MEAL_BASE_URL}${searchTerm}`);
  }, [searchTerm]);

  const contextValue = {
    meals,
    setMeals,
    loading,
    setSearchTerm,
    fetchRandomMeal,
    showModal,
    setShowModal,
    selectMealFunc,
    selectedMeal,
    closeModal,
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
