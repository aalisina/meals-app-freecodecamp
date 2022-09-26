import React from "react";
import { useGlobalContext } from "../Context";

function Favorites() {
  const { favorites, removeFromFavorites, selectMealFunc } = useGlobalContext();
  
  return (
    <section className="favorites">
      <div className="favorites-content">
        <h5>Favorites</h5>
        <div className="favorites-container">
          {favorites.map((favoriteMeal) => {
            const {
              idMeal,
              strMealThumb: image,
              strMeal: title,
            } = favoriteMeal;
            return (
              <div key={idMeal} className="favorite-item">
                <img src={image} alt={title} className="favorites-img img" />
                <button
                  className="remove-btn"
                  onClick={() => removeFromFavorites(idMeal)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Favorites;
