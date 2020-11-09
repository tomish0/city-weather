import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./features/Search";
import CityList from "./features/CityList";
import "./App.css";

function App() {
  // The application is structured to use city data 
  // downloaded & converted from worldcities.csv with csvToJson.js.
  // With this city data, make api requests to api.openweathermap.org with the 
  // latitude and longtitude acquired from selecting chosen city object.
  // Uses localStorage to retrieve & add to your city list.

  // state to hold selected cities
  const [selectedCities, setSelectedCities] = useState([]);

  // function to handle click on certain city
  const selectCity = (city) => {
    // check city isn't already in list 
    var duplicate = selectedCities.find((item) => {
      return item.id === city.id;
    });
    // if not then perform request with lat & long
    if (!duplicate) {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${
        city.lat
      }&lon=${city.lng}&appid=${"d0a10211ea3d36b0a6423a104782130e"}`;
      axios({
        method: "get",
        url: url,
      })
        .then((res) => {
          // convert temp to celcius
          const temp = (res.data.main.temp - 273.15).toFixed(0) + " °C";
          // add measurement to humidity value
          const humidity = res.data.main.humidity + " RH";
          // construct city weather object
          var data = {
            id: city.id,
            city: city.city,
            region: city.admin_name,
            country: city.country,
            timezone: res.data.timezone,
            temp: temp,
            humidity: humidity,
          };
          // add new city to local state
          setSelectedCities([data, ...selectedCities]);
          // add new city to local storage
          localStorage.setItem(
            "citiesData",
            JSON.stringify([data, ...selectedCities])
          );
        })
        .catch((err) => {
          console.dir(err);
        });
    }
  };

  // useEffect used to add chosen cities on load of application
  useEffect(() => {
    const citiesData = JSON.parse(localStorage.getItem("citiesData"));
    if (citiesData) {
      setSelectedCities(citiesData);
    }
  }, []);

  return (
    <div className="app">
      <Search selectCity={selectCity} />
      <CityList
        selectedCities={selectedCities}
        setSelectedCities={setSelectedCities}
      />
    </div>
  );
}

export default App;
