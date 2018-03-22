import React, {Component} from 'react';
import {
    View,
    Text,
    Image
} from 'react-native'
import { Icon } from 'native-base';
import HeaderTitle from '../element/HeaderTitle'
export default class Inbox extends Component {

    static navigationOptions = {
        //header:null,
        headerLeft:null,
        headerTitle:<HeaderTitle title='Inbox'/>,
        tabBarIcon: () => {
            return <Image source={require('../../images/inbox.png')} 
            style={{tintColor:'gray', width:25,height:25}}/>
        }
    }
    render(){
        return(
            <View>
                <Text>Inbox</Text>
            </View>
        )
    }
}