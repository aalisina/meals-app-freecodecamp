import { useGlobalContext } from "../Context";
import { BsHandThumbsUp } from "react-icons/bs";

function Meals() {
  const { meals, loading } = useGlobalContext();
  if(loading) {
    return <section className="section"><h4>Loading...</h4></section>
  }
  return (
    <section className="section-center">
      {meals.map((meal) => {
        const { idMeal, strMeal: title, strMealThumb: image } = meal;

        return (
          <article key={idMeal} className="single-meal">
            <img src={image} alt={title} className="img" />
            <footer>
              <h5>{title}</h5>
              <button className="like-btn"><BsHandThumbsUp /></button>
            </footer>
          </article>
        );
      })}
    </section>
  );
}

export default Meals;
