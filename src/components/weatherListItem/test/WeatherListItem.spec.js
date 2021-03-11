import React from 'react';
import {shallow} from 'enzyme';
import { WeatherListItem } from '../WeatherListItem';
import { ListItem } from 'react-native-elements';
import { Image } from 'react-native';

describe('Weather List Item Check',()=>{
    let wrapper;
    let itemProp= {
        "dt": 1603962000,
        "main": {
          "temp": 290.04,
          "feels_like": 288.42,
          "temp_min": 290.04,
          "temp_max": 292.03,
          "pressure": 1017,
          "sea_level": 1017,
          "grnd_level": 997,
          "humidity": 48,
          "temp_kf": -1.99
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 1
        },
        "wind": {
          "speed": 0.95,
          "deg": 48
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-10-29 09:00:00"
      }
    beforeEach(()=>{
        wrapper=shallow(<WeatherListItem item={itemProp}/>);
    });

    it('Weather List Item Snapshot',()=>{
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(ListItem.Title).length).toBe(3);
        expect(wrapper.find(ListItem.Subtitle).length).toBe(4);
        expect(wrapper.find(ListItem.Content).length).toBe(5);       
        expect(wrapper.find(Image).length).toBe(1);    
    });
    it('Weather List Item Snapshot',()=>{
        wrapper.setProps({item:{
            "dt": 1603962000,
            "main": {
            },
            "weather": [
            ],
            "clouds": {
              "all": 1
            },
            "wind": {
              "speed": 0.95,
              "deg": 48
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": ""
          }});
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(ListItem.Title).length).toBe(0);
        expect(wrapper.find(ListItem.Subtitle).length).toBe(0);
        expect(wrapper.find(ListItem.Content).length).toBe(2);     
        expect(wrapper.find(Image).length).toBe(0);  
    });
})