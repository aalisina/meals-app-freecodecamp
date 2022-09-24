import { useState } from "react";
import { useGlobalContext } from "../Context";

function Search() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
        <button type="button" className="btn btn-hipster">
          Surprise me!
        </button>
      </form>
    </header>
  );
}

export default Search;
