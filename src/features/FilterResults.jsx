import React from "react";

function FilterResults(props) {
  const { searchResults, selectCity } = props;

  return (
    <ul>
      {searchResults.map((city, index) => {
        return (
          <li key={index} onClick={() => selectCity(city)}>
            {city.city}, {city.admin_name}, {city.country}
          </li>
        );
      })}
    </ul>
  );
}

export default FilterResults;
