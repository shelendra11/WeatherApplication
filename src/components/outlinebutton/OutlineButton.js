import React from 'react';
import { Button } from 'react-native-elements';
export const OutlineButton = (props) =>{
    const {onPress,title}=props
 return (title?<Button 
    type="outline"
    title={title}
    buttonStyle={{paddingHorizontal:30}}
    onPress={onPress}    
    />:null)   
}