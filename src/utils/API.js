import axios from "axios";
const BASEURL = "https://api.openweathermap.org/data/2.5/weather?q=";
const APIKEY = "bb70df7726fdccc57ce65df7344701bc";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + "&units=imperial&appid=" + APIKEY);
  }
};
