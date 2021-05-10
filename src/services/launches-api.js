const axios = require("axios");
const CORS = "https://kstick-cors-anywhere.herokuapp.com/";


export default function fetchLaunch(){
    return axios.get(`${CORS}https://fdo.rocketlaunch.live/json/launches/next/5`)
    .catch((err) => console.log(err))
}