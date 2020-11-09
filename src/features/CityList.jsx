import React from "react";
import EachCity from "./EachCity";

function CityList(props) {
  const { selectedCities, setSelectedCities } = props;

  const removeCity = (index) => {
    var newStateArray = [
      ...selectedCities.slice(0, index),
      ...selectedCities.slice(index + 1),
    ];
    setSelectedCities(newStateArray);
    localStorage.setItem("citiesData", JSON.stringify(newStateArray));
  };

  return (
    <ul>
      {selectedCities.map((city, index) => {
        return (
          <EachCity
            key={index}
            index={index}
            city={city}
            removeCity={removeCity}
          />
        );
      })}
    </ul>
  );
}

export default CityList;
