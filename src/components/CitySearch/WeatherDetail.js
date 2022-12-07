import React from "react";

function WeatherDetail(props) {
  return (
    <div className="text-center">
      {/* <img alt={props.name} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} /> */}
      <h3>Date: {props.dt}</h3>
      <h3>Temp: {props.main.temp} </h3>
      <h3>Humidity: {props.main.humidity} %</h3>
      <h3>Wind Speed: {props.wind.speed} MPH</h3>
    </div>
  );
}

export default WeatherDetail;