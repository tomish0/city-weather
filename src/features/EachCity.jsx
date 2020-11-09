import React from "react";
import DateTime from "./DateTime";
import "../css/EachCity.css";

function EachCity(props) {
  const { index, city, removeCity } = props;

  return (
    <li className="each-city-container">
      <div className="info-container">
        <div className="title">
          <span>{city.city}, </span>
          {city.region}, {city.country}
        </div>
        <div className="temp">
          <span>Temperature: </span>
          {city.temp}
        </div>
        <div className="humidity">
          <span>Humidity: </span>
          {city.humidity}
        </div>
        <div className="time">
          <span>Local Time: </span>
          <DateTime timezone={city.timezone} />
        </div>
      </div>
      <button onClick={() => removeCity(index)}>REMOVE</button>
    </li>
  );
}

export default EachCity;
