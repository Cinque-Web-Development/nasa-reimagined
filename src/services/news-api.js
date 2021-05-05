const axios = require("axios");
const CORS = "https://kstick-cors-anywhere.herokuapp.com/";
const API_KEY = process.env.REACT_APP_NEWS_KEY


export default function fetchNews(){
   return axios.get(`${CORS}https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${API_KEY}`)
   .catch((err) => console.log(err))
} 
 
