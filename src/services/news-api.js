const axios = require("axios");
const CORS = "https://kstick-cors-anywhere.herokuapp.com/";
const API_KEY = process.env.REACT_APP_NEWS2_KEY
const options = {
   headers: { "x-api-key": API_KEY },
   
};

export default function fetchNews() {
   return axios.get(`${CORS}api.datanews.io/v1/news?q=Nasa&language=en`, options)
   .catch((err) => console.log(err));
}
