// React
import React, { useCallback, useState, useRef, useMemo } from "react";
import { Link } from "react-router-dom";

// Components
import Card from "../Card/Card";
import Search from "../Search/Search";

// Css
import "./SlideBar.css";

function SlideBar({ parks }) {
  const [search, setSearch] = useState("");
  const searchInput = useRef("");

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  const filteredParks = useMemo(
    () =>
      parks.filter((park) => {
        return `${park.name}, ${park.localization.name}`
          .toLowerCase()
          .includes(search.toLowerCase());
      }),
    [parks, search]
  );

  return (
    <div className="slide-bar">
      <Link to="/" className="link">
        <h1 className="slide-bar__title">Park Locations</h1>
      </Link>
      <Search
        search={search}
        searchInput={searchInput}
        handleSearch={handleSearch}
      />
      <div className="slide-bar__scroll">
        {filteredParks.length !== 0 ? (
          filteredParks.map((park) => <Card key={park.id} park={park} />)
        ) : (
          <h1 className="slide-bar__error">Parks Not Found.</h1>
        )}
      </div>
    </div>
  );
}

export default SlideBar;
