import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import { stringFile, VALID_PIN_CODE } from '../utils/strings';
import { useSelector, useDispatch } from "react-redux";
import { getWeatherInfo } from '../store/actions';
import { API_URL } from '../utils/url';
import axios from 'axios';
import { OutlineButton } from '../components/outlinebutton/OutlineButton';
import { Texth4 } from '../components/text/Texth4';
import { Alert } from 'react-native';
const HomeScreen = (props) => {
    const [submitPress, isSubmitPress] = useState(false)
    const [pinCode, setPinCode] = useState("")
    const store = useSelector(state => state.weather)

    const data = submitPress ? store.find(it => it.pinCode === pinCode) : null
    const dispatch = useDispatch();
    const callApi = async () => {
        isSubmitPress(true)
        dispatch(getWeatherInfo(pinCode))
    }
    const alertPopUp = () =>
        Alert.alert(
            "Pin Code!!",
            "Please Enter the Pin Code",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        );

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Input
                placeholder={stringFile.home.enterPinCode}
                label={stringFile.home.pinCode}
                value={pinCode}
                onChangeText={(text) => {
                    setPinCode(text)
                    if (submitPress) {
                        isSubmitPress(false)

                    }

                }}
                errorStyle={{ color: 'red' }}
                maxLength={6}
                numberOfLines={1}
                keyboardType={'numeric'}
            />
            <OutlineButton
                title={stringFile.home.weatherButton}
                onPress={() => {
                    if (pinCode.length < 1) {
                        alertPopUp()
                    } else { callApi() }

                }}
            />

            {data && data.cod && data.cod == 200 ? props.navigation.push("List", { pinCode }) : null}
        </View>)

}
//Space

export default HomeScreen