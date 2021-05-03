const axios = require("axios");
const CORS = "https://kstick-cors-anywhere.herokuapp.com/";
const API_KEY = process.env.REACT_APP_API_KEY

export default function fetchAPOD() {
    return axios.get(`${CORS}https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&concept_tags=true`)
    .catch((err) => console.log(err));
}