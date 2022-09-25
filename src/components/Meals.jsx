import { useGlobalContext } from "../Context";
import { BsHandThumbsUp } from "react-icons/bs";

function Meals() {
  const { meals, loading, selectMealFunc } = useGlobalContext();
  if (loading) {
    return (
      <section className="section">
        <h4>Loading...</h4>
      </section>
    );
  }
  if (meals.length < 1) {
    return (
      <section className="section">
        <h4>No meals matched your search term. Plase try again. </h4>
      </section>
    );
  }
  return (
    <section className="section-center">
      {meals.map((meal) => {
        const { idMeal, strMeal: title, strMealThumb: image } = meal;

        return (
          <article key={idMeal} className="single-meal">
            <img
              src={image}
              alt={title}
              className="img"
              onClick={() => {
                selectMealFunc(idMeal);
              }}
            />
            <footer>
              <h5>{title}</h5>
              <button className="like-btn">
                <BsHandThumbsUp />
              </button>
            </footer>
          </article>
        );
      })}
    </section>
  );
}

export default Meals;
