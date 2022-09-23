import { useState } from "react";
import { useGlobalContext } from "../Context";

function Search() {
  return (
    <header className="search-container">
      <form>
        <input
          type="text"
          placeholder="Type your favorite meal."
          className="form-input"
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
