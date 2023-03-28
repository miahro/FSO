import axios from 'axios'
const api_key = process.env.REACT_APP_API_KEY


const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?units=metric&q='


const getTarget = (target) => {
    const targetUrl = baseUrl+target+'&APPID='+api_key
    console.log(targetUrl)
    return axios.get(targetUrl)
}



export default {
    getTarget
}