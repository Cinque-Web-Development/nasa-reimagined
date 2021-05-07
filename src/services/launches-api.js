const axios = require("axios");
const CORS = "https://kstick-cors-anywhere.herokuapp.com/";


export default function fetchLaunch(){
    return axios.get(`${CORS}https://ll.thespacedevs.com/2.0.0/launch/upcoming/`)
    .catch((err) => console.log(err))
}