import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import RootNavigation from './src/navigations/rootNavigation';

// redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import allReducers from './src/reducers';
import logger from 'redux-logger'
// redux-saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/sagas/rootSaga';
const sagaMiddleware = createSagaMiddleware();

let store = createStore(allReducers, applyMiddleware(sagaMiddleware, logger))

const App = () => (
    <Provider store={store}>
        <RootNavigation />
    </Provider>
)
sagaMiddleware.run(rootSaga);

AppRegistry.registerComponent('yomelo_app', () => App);
