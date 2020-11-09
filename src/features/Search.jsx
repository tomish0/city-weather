import React, { useState } from "react";
import letters from "../letterArr.js";
import allCities from "../worldCities/allCities";
import FilterResults from "./FilterResults";
import "../css/Search.css";

function Search(props) {
  const [searchResults, setSearchResults] = useState([]);

  // function used on search / change to find cities
  const findCities = (e) => {
    // put the query to lower case to avoid issues with different case
    var query = e.target.value.toLowerCase();
    // handle the deletion of search query so undefined isn't added to state
    if (query.length > 0) {
      // use the first letter to choose which dataset to loop through
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
        // limit your search to 10 results to keep results selection shorter 
        // & avoid slow search 
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
