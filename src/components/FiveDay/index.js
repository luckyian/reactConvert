import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import axios, {isCancel, AxiosError} from 'axios';
 

let currentCity = city;
    localStorage.setItem("currentCity", currentCity);


let apiKey = "bb70df7726fdccc57ce65df7344701bc";
let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey;

let forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + apiKey;
 // Ajax call to get the five day forecast
 $.ajax({
    url: forecastURL,
    method: "GET"
  }).then(function (response) {
    // Populates the html with the five day forecast
    let newCity1 = response.city.name;

    $(".city-nameO").text(newCity1);
    $(".tempO9").html("9am: " + response.list[3].main.temp + " &#8457;");
    $(".tempO6").html("6pm: " + response.list[6].main.temp + " &#8457;");
    $(".humidityO").html("Humidity: " + response.list[4].main.humidity + " %");
    $(".windspeedO").html("Wind Speed: " + response.list[4].wind.speed + "mph");
    $(".dateO").html(timeConverter(response.list[5].dt));
    let iconO = response.list[4].weather[0].icon;
    let iconOURL = "https://openweathermap.org/img/w/" + iconO + ".png";
    $(".icon1").attr({ src: iconOURL, alt: "Weather icon." });

    $(".city-nameT").text(newCity1);
    $(".tempT9").html("9am: " + response.list[11].main.temp + " &#8457;");
    $(".tempT6").html("6pm: " + response.list[14].main.temp + " &#8457;");
    $(".humidityT").html("Humidity:" + response.list[12].main.humidity + " %");
    $(".windspeedT").html("Wind Speed: " + response.list[12].wind.speed + "mph");
    $(".dateT").html(timeConverter(response.list[13].dt));
    let iconT = response.list[12].weather[0].icon;
    let iconTURL = "https://openweathermap.org/img/w/" + iconT + ".png";
    $(".icon2").attr({ src: iconTURL, alt: "Weather icon." });

    $(".city-nameH").text(newCity1);
    $(".tempH9").html("9am: " + response.list[19].main.temp + " &#8457;");
    $(".tempH6").html("6pm: " + response.list[22].main.temp + " &#8457;");
    $(".humidityH").html("Humidity: " + response.list[20].main.humidity + " %");
    $(".windspeedH").html("Wind Speed: " + response.list[20].wind.speed + "mph");
    $(".dateH").html(timeConverter(response.list[21].dt));
    let iconH = response.list[20].weather[0].icon;
    let iconHURL = "https://openweathermap.org/img/w/" + iconH + ".png";
    $(".icon3").attr({ src: iconHURL, alt: "Weather icon." });

    $(".city-nameF").text(newCity1);
    $(".tempF9").html("9am: " + response.list[27].main.temp + " &#8457;");
    $(".tempF6").html("6pm: " + response.list[30].main.temp + " &#8457;");
    $(".humidityF").html("Humidity: " + response.list[28].main.humidity + " %");
    $(".windspeedF").html("Wind Speed: " + response.list[28].wind.speed + "mph");
    $(".dateF").html(timeConverter(response.list[29].dt));
    let iconF = response.list[28].weather[0].icon;
    let iconFURL = "https://openweathermap.org/img/w/" + iconF + ".png";
    $(".icon4").attr({ src: iconFURL, alt: "Weather icon." });

    $(".city-nameI").text(newCity1);
    $(".tempI9").html("9am: " + response.list[35].main.temp + " &#8457;");
    $(".tempI6").html("6pm: " + response.list[38].main.temp + " &#8457;");
    $(".humidityI").html("Humidity: " + response.list[36].main.humidity + " %");
    $(".windspeedI").html("Wind Speed: " + response.list[36].wind.speed + "mph");
    $(".dateI").html(timeConverter(response.list[37].dt));
    let iconI = response.list[36].weather[0].icon;
    let iconIURL = "https://openweathermap.org/img/w/" + iconI + ".png";
    $(".icon5").attr({ src: iconIURL, alt: "Weather icon." });
  })
};