import { WEATHER_INFO_FAILURE, WEATHER_INFO_SUCCESS ,WEATHER_INFO_NET_FAILURE} from "./types"

const initState=[]
const initialState={
    cod:null,
    message:null,
    list:null,
    city:null,
    pinCode:null
}

const  weatherReducer =(state=initState,action) =>{
    switch(action.type){
        case WEATHER_INFO_SUCCESS:
         return [...state.filter(it => (it.pinCode !==action.payload.pinCode)),action.payload]
        case WEATHER_INFO_NET_FAILURE:
            console.log(state.find(it=>it.pinCode===action.payload.pinCode))
            return state.find(it=>it.pinCode===action.payload.pinCode)? [...state]: [...state,  {...action.payload,list:null,city:null,cod:1009} ]
        case WEATHER_INFO_FAILURE:
         return [...state.filter(it => (it.pinCode !==action.payload.pinCode)),{...action.payload,list:null,city:null,cod:1009}]  
        default:
            return state
    }
}

export default weatherReducer
