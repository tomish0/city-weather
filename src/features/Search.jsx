import React, { useState } from "react";
import letters from "../letterArr.js";
import allCities from "../worldCities/allCities";
import FilterResults from "./FilterResults";
import "../css/Search.css";

function Search(props) {
  const [searchResults, setSearchResults] = useState([]);

  const findCities = (e) => {
    var query = e.target.value.toLowerCase();
    if (query.length > 0) {
      var letter = query.charAt(0);
      var index = letters.findIndex((item) => {
        return item === letter;
      });
      var selectedCities = [];
      var i = 0;
      while (i < allCities[index].length) {
        if (allCities[index][i].city.toLowerCase().includes(query)) {
          selectedCities.push(allCities[index][i]);
          setSearchResults(selectedCities);
        }
        if (selectedCities.length === 10) {
          break;
        }
        i++;
      }
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="search-container">
      <input type="text" placeholder="Find a City..." onChange={findCities} />
      <FilterResults
        searchResults={searchResults}
        selectCity={props.selectCity}
      />
    </div>
  );
}

export default Search;
