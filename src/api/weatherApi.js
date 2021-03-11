import axios from 'axios';
import { API_URL,API_KEY } from '../utils/url';

export function fetchWeatherInfo(pinCode){
    return axios
    .get(API_URL, {
      params: {
        zip: pinCode,
        appid: API_KEY,
      },
    })
    .then((response) => ({response}))
    .catch((error) => ({error}))
}