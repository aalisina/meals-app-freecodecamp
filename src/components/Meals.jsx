import { useGlobalContext } from "../Context";

function Meals() {
  const {what, where} = useGlobalContext();
  console.log(what, where);

  return <h1>Meals component</h1>;
}

export default Meals;
