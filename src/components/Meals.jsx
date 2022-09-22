import { useGlobalContext } from "../Context";

function Meals() {
  const { meals } = useGlobalContext();
  console.log(meals);

  return <h1>Meals component</h1>;
}

export default Meals;
