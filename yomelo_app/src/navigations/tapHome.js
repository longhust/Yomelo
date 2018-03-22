import { TabNavigator,TabBarTop, StackNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';

import Campaign from '../components/TapHome/Campaigns';
import Inbox from '../components/TapHome/Inbox';
import Post from '../components/TapHome/Post';
import Profile from '../components/TapHome/Profile'

export default TabNavigator({
    Campaigns: { screen: Campaign},
    Post: { screen: Post },
    Inbox: { screen: Inbox },
    Profile: { screen: Profile },
}, {

        tabBarOptions: {
            style: {
                backgroundColor: 'white',
                //paddingTop:-10,
                height:55,
            },
            labelStyle:{
                fontSize:9,
            },
            indicatorStyle :{
                backgroundColor:'tomato'
            },
            tabBarComponent :TabBarTop,
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            showLabel: true,
            showIcon: true,
        },
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: true,
    });