import { useContext } from "react";
import { AppContext } from "../Context";

function Meals() {
  const {what, where} = useContext(AppContext);
  console.log(what, where);

  return <h1>Meals component</h1>;
}

export default Meals;
