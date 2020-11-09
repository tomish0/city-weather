import React, { useState, useEffect } from "react";

function DateTime(props) {
  const { timezone } = props;

  const [time, setTime] = useState("");

  // function to calculate the local time with the timezone
  function calcTime(offset) {
    var d = new Date();
    // convert to msec
    // subtract local time zone offset
    // get UTC time in msec
    var utc = d.getTime() + d.getTimezoneOffset() * 60000;
    // create new Date object for different city
    // using supplied offset
    var nd = new Date(utc + 1000 * offset);
    // return time as a string
    return nd.toLocaleString();
  }

  // update the time for each city real time
  useEffect(() => {
    var interval = setInterval(function () {
      setTime(calcTime(timezone));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timezone]);

  return <div className="date-time">{time}</div>;
}

export default DateTime;
