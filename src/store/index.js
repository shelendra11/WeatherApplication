import weatherReducer from "./reducer";

const { combineReducers, createStore,applyMiddleware } = require("redux");
import createSagaMiddleware from 'redux-saga'
import mySaga from "./saga";
import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer,persistStore } from 'redux-persist'

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
    weather: weatherReducer
})
const persistConfig = {
    key: 'root',
    storage:AsyncStorage,
  }

 const persistedStore= persistReducer(persistConfig,rootReducer)
 const singleStore =createStore(persistedStore,applyMiddleware(sagaMiddleware));
 export const persistor= persistStore(singleStore)
 sagaMiddleware.run(mySaga);
 export default singleStore