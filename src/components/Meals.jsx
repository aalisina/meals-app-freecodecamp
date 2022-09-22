import { useGlobalContext } from "../Context";

function Meals() {
  const { meals } = useGlobalContext();
  console.log(meals);

  return (
    <section className="section-center">
      {meals.map((meal) => {
        const { idMeal, strMeal: title, strMealThumb: image } = meal;

        return (
          <article key={idMeal} className="single-meal">
            <img src={image} alt={title} className="img" />
            <footer>
              <h5>{title}</h5>
              <button className="like-btn">Click Me</button>
            </footer>
          </article>
        );
      })}
    </section>
  );
}

export default Meals;
