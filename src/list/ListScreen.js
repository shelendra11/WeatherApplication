import React from 'react';
import { FlatList, View } from 'react-native';
import { useSelector } from "react-redux";
import { WeatherListItem } from '../components/weatherListItem/WeatherListItem';

const ListScreen = (props) => {
    console.log("props>>>" + JSON.stringify(props))
    const storelist = useSelector(state => state.weather)
    const data = storelist.find(it => it.pinCode === props.route.params.pinCode)
    const renderItemValue = ({ item }) => {
        return (<WeatherListItem item={item} />)
    }


    return (
        <View style={{ flex: 1 }}>
            {data && data.cod && data.cod == 200 && data.list.length > 0 ? <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={data.list} renderItem={renderItemValue} /> : null
            }
        </View>)

}

export default ListScreen