// React
import React from "react";

// Css
import "./Search.css";

function Search({ search, searchInput, handleSearch }) {
  return (
    <form className="search">
      <input
        type="search"
        placeholder="Filter park locations"
        value={search}
        ref={searchInput}
        onChange={handleSearch}
        className="search__text"
      />
    </form>
  );
}

export default Search;
