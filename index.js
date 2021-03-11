/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import HomeScreen from './src/home/HomeScreen';
import { Provider } from 'react-redux';
import singleStore, { persistor } from './src/store';
import ListScreen from './src/list/ListScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PersistGate } from 'redux-persist/integration/react'
const Stack = createStackNavigator();

const appProvider = () => <Provider store={singleStore}>
    <PersistGate persistor={persistor}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Home"} screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="List" component={ListScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    </PersistGate>
</Provider>

AppRegistry.registerComponent(appName, () => appProvider);
