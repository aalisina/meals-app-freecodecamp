import { useGlobalContext } from "../Context";

function Meals() {
  const { user } = useGlobalContext();
  console.log(user);

  return <h1>Meals component</h1>;
}

export default Meals;
