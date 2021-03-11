import React, { useEffect, useState } from 'react';
import { View} from 'react-native';
import { Input ,Button,Text} from 'react-native-elements';
import { stringFile, VALID_PIN_CODE } from '../utils/strings';
import { useSelector,useDispatch } from "react-redux";
import { getWeatherInfo } from '../store/actions';
import { API_URL } from '../utils/url';
import axios from 'axios';
import { OutlineButton } from '../components/outlinebutton/OutlineButton';
import { Texth4 } from '../components/text/Texth4';
const HomeScreen =(props)=>{
    const [submitPress,isSubmitPress]= useState("")
    const [pinCode,setPinCode]= useState("")
    const store= useSelector(state=>state.weather)
    
    const data=submitPress?store.find(it=>it.pinCode===pinCode):null
    const dispatch = useDispatch();
    
    return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
    <Input 
        placeholder={stringFile.home.enterPinCode}
        label={stringFile.home.pinCode}
        value={pinCode}
        onChangeText={(text)=>{
            setPinCode(text)
            if(submitPress){
                isSubmitPress(false)
            }
        }}
        errorStyle={{color:'red'}}
        maxLength={6}
        numberOfLines={1}
        keyboardType={'numeric'}
    />
    <OutlineButton 
    title={stringFile.home.weatherButton} 
    onPress={async ()=> {
        isSubmitPress(true)
        dispatch(getWeatherInfo(pinCode))
    }}
    />

    {data&&data.cod&&data.cod==200?(data.city.name?
    <View style={{justifyContent:"center",alignItems:"center"}}>
    <Texth4 style={{margin:20}} title={`This Code is for ${data.city.name} ,${data.city.country}`}/>
    <OutlineButton 
    title={stringFile.home.goToList}
    onPress={()=>props.navigation.push("List",{pinCode})}    
    />
    </View>:null):
    data&&<Texth4 style={{color:'red',margin:20}} title={data.message}/>
    }
    </View>)
    
}
//Space

export default HomeScreen