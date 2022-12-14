import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();

const MEAL_BASE_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const RANDOM_MEAL_URL = "https://www.themealdb.com/api/json/v1/1/random.php";

const getFavsFromLocalStorage = () => {
  let favorites = localStorage.getItem("favorites");
  if (favorites) {
    favorites = JSON.parse(localStorage.getItem("favorites"));
  } else {
    favorites = [];
  }
  return favorites;
};

const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  // set initial state temporarily to true to test
  const [showModal, setShowModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [favorites, setFavorites] = useState(getFavsFromLocalStorage());

  const addToFavorites = (idMeal) => {
    const alreadyFav = favorites.find((fav) => fav.idMeal === idMeal);
    if (alreadyFav) return;
    const meal = meals.find((m) => m.idMeal === idMeal);
    const updatedFavs = [...favorites, meal];
    setFavorites(updatedFavs);
    localStorage.setItem("favorites", JSON.stringify(updatedFavs));
  };
  const removeFromFavorites = (idMeal) => {
    const updatedFavs = favorites.filter((fav) => fav.idMeal !== idMeal);
    setFavorites(updatedFavs);
    localStorage.setItem("favorites", JSON.stringify(updatedFavs));
  };
  const selectMealFunc = (idMeal, favoriteMeal) => {
    let meal;
    // Without this if statement the modal won't show if we fetch a random meal and then select a
    // a favorite to show in the modal
    if (favoriteMeal) {
      meal = favorites.find((m) => m.idMeal === idMeal);
    } else {
      meal = meals.find((m) => m.idMeal === idMeal);
    }
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
    addToFavorites,
    removeFromFavorites,
    favorites,
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
