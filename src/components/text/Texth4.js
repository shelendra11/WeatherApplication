import React from 'react';
import { Text} from 'react-native-elements';
export const Texth4 = (props) =>{
    const {style,title} =props
    return (title?<Text h4 h4Style={style}>{title}</Text>:null);
}