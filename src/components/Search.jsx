import { useState } from "react";
import { useGlobalContext } from "../Context";

function Search() {
  const [text, setText] = useState("");
  const { setSearchTerm, fetchRandomMeal } = useGlobalContext();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      console.log(text);
      setSearchTerm(text);
    }
  };

  // To prevent a bug when the user searches by a search term, then clicks the surprise me
  // button and then searches by the same search term, the state doesn't change.
  const handleRandomMeal = () => {
    setText("");
    setSearchTerm("");
    fetchRandomMeal();
  };
  return (
    <header className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your favorite meal."
          className="form-input"
          onChange={handleChange}
          value={text}
        />
        <button type="submit" className="btn">
          Search
        </button>
        <button
          type="button"
          className="btn btn-hipster"
          onClick={handleRandomMeal}
        >
          Surprise me!
        </button>
      </form>
    </header>
  );
}

export default Search;
