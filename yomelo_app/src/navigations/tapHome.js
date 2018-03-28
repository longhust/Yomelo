// import React, {Component} from 'react'

import { TabNavigator, TabBarTop, StackNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../components/TapHome/Home';
import Inbox from '../components/TapHome/Inbox';
import Campaigns from '../components/TapHome/Campaigns';
import Profile from '../components/TapHome/Profile'


export default TapHome= TabNavigator({
    Home: { screen: Home },
    Campaigns: { screen: Campaigns },
    Inbox: { screen: Inbox },
    You: { screen: Profile },
}, {
    tabBarOptions: {
        style: {
            backgroundColor: 'white',
            //paddingTop:-10,
            height: 55,
        },
        labelStyle: {
            fontSize: 9,
        },
        indicatorStyle: {
            backgroundColor: 'tomato'
        },
        tabBarComponent: TabBarTop,
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showLabel: true,
        showIcon: true,
    },
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
});