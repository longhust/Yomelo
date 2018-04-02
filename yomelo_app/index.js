import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import RootNavigation from './src/navigations/rootNavigation'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './src/reducers'
const store = createStore(allReducers)

const App = () => (
    <Provider store={store}>
        <RootNavigation />
    </Provider>
)

AppRegistry.registerComponent('yomelo_app', () => App);
