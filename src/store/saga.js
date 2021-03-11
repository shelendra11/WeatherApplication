import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { FETCH_WEATHER_INFO, WEATHER_INFO_SUCCESS, WEATHER_INFO_FAILURE, WEATHER_INFO_NET_FAILURE } from './types';
import { fetchWeatherInfo } from '../api/weatherApi';
import NetInfo from "@react-native-community/netinfo";
import { stringFile } from '../utils/strings';
import { fetchNetInfo } from '../api/netInfo';
function* mySaga() {
    yield takeLatest(FETCH_WEATHER_INFO, fetchWeather);
}

function* fetchWeather(action) {
    const { response, error } = yield call(fetchWeatherInfo, action.payload)
    console.log("error>>>>>>>>>" + JSON.stringify(error));
    if (response) {
        console.log("response>>>>>>>>>" + JSON.stringify(response));
        yield put({ type: WEATHER_INFO_SUCCESS, payload: { ...response.data, pinCode: action.payload } })
    } else {
        const { status } = yield call(fetchNetInfo)
        if (status) {
            yield put({ type: WEATHER_INFO_FAILURE, payload: { message: stringFile.common.somethingWentWrong, pinCode: action.payload } })
        } else {
            yield put({ type: WEATHER_INFO_NET_FAILURE, payload: { pinCode: action.payload, message: stringFile.common.checkNetwork } })
        }

    }
}

export default mySaga;