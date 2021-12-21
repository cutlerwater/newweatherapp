import axios from "axios";

const URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = '99b0fa765a69852257a6bad630c1dff9';

export const fetchWeather = async(query) => {
    const {data} = await axios.get(URL,{
        params:{
            q : query,
            units: 'metric',
            APPID: API_KEY
        }
    })
    return data
}