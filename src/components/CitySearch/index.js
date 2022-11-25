import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import axios, {isCancel, AxiosError} from 'axios';

function searchWeather(city) {
    let currentCity = city;
            localStorage.setItem("currentCity", currentCity);
        
        
            let apiKey = "bb70df7726fdccc57ce65df7344701bc";
            let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey;
        
            let forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + apiKey;

    return (
        
            
           axios({
              url: queryURL,
              method: "GET"
            }).then(function (response) {
              console.log(response);
              let date = timeConverter(response.dt);
              let latie = parseInt(response.coord.lat);
              let longie = parseInt(response.coord.lon);
        
              let icon = response.weather[0].icon;
              let iconURL = "https://openweathermap.org/img/w/" + icon + ".png";
              $(".icon").attr({ src: iconURL, alt: "Weather icon." });
        
        
              // Changes search result into name populated in the city list and 
              let newCity = response.name;
              if (cityArr.length > 0) {
        
                //IF city doesn't exist then it returns -1
                if (cityArr.indexOf(newCity) === -1) {
                  cityArr.push(newCity);
                  window.localStorage.setItem("city-list", JSON.stringify(cityArr));
                  let tRow = $(`<button type="button" class="btn btn-primary city-btn" id="${newCity}">${newCity}</button>`);
                  $(".listie").append(tRow);
                }
        
        
              }
        
              else {
                cityArr.push(newCity);
                window.localStorage.setItem("city-list", JSON.stringify(cityArr));
                let tRow = $(`<button type="button" class="btn btn-primary city-btn" id="${newCity}">${newCity}</button>`);
                $(".listie").append(tRow);
              }

            );
}

export default CitySearch;