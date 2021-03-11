import React from 'react';
import { Image } from 'react-native';
import { ListItem} from 'react-native-elements';
import { stringFile } from '../../utils/strings';
import { IMAGE_API_URL } from '../../utils/url';
export const WeatherListItem =(props) =>{
    const {item}=props
     return (
        <ListItem bottomDivider>
        <ListItem.Content >
            {item.dt_txt&&<ListItem.Title style={{fontWeight:'bold',fontSize:20}}>{item.dt_txt}</ListItem.Title>}
            <ListItem.Content style={{flexDirection:"row" ,marginTop:20}}>
            {item.main&&(item.main.temp||item.main.temp_min||item.main.temp_max)?<ListItem.Content >
            <ListItem.Title >{stringFile.list.temp}</ListItem.Title>
            {item.main.temp&&<ListItem.Subtitle>{stringFile.list.tempAt+item.main.temp.toFixed(1)}</ListItem.Subtitle>}
            {item.main.temp_min&&<ListItem.Subtitle>{stringFile.list.minTemp+item.main.temp_min.toFixed(1)}</ListItem.Subtitle>}
            {item.main.temp_max&&<ListItem.Subtitle>{stringFile.list.maxTemp+item.main.temp_max.toFixed(1)}</ListItem.Subtitle>}
            </ListItem.Content>:null}
            {item.weather&&item.weather.length>0&&item.weather[0].main?
            <ListItem.Content >
            <ListItem.Title >{stringFile.list.weather}</ListItem.Title>
            <ListItem.Content style={{flexDirection:"row",alignItems:"center",flexWrap:"wrap"}}>
            <Image source={{uri:IMAGE_API_URL.replace("{0}",item.weather[0].icon)}} style={{width:35,height:35}}/>
            <ListItem.Subtitle>{item.weather[0].main}</ListItem.Subtitle>
            </ListItem.Content>
            </ListItem.Content>:null}
            </ListItem.Content>
            </ListItem.Content>
        </ListItem>
    );
}
