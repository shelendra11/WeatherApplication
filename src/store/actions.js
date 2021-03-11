import axios from "axios";
import { API_URL } from "../utils/url";
import { FETCH_WEATHER_INFO } from "./types"
export const getWeatherInfo=(pinCode)=>{
    return ({
        type:FETCH_WEATHER_INFO,
        payload:pinCode
    });
}



// export const getWeatherInfoCreater=(pincode)=> {
//     console.log("url"+API_URL+pincode)
//    fetch(API_URL+pincode).
//     then((response)=> response.json()).
//     then((res)=>{
//         console.log("res"+JSON.stringify(res))
//     } ).catch((err)=>{
//         console.error(err)
//     });
//     console.log("response"+JSON.stringify(response))
//     return ({
//         type:GET_WEATHER_INFO,
//         payload:{...response}
//     });
// };