import React, {Component} from 'react';
import {
    View,
    Text,
    Image
} from 'react-native'
import { Icon } from 'native-base';
import HeaderTitle from '../element/HeaderTitle'
export default class Profile extends Component {

    static navigationOptions = {
        //header:null,
        headerLeft:null,
        headerTitle:<HeaderTitle title='Profile'/>,
        tabBarIcon: ({ tinColor }) => {
            return <Image source={require('../../images/profile.png')} 
            style={{tintColor:'gray',width:25,height:25}}/>
        }
    }
    render(){
        return(
            <View>
                <Text>Profile</Text>
            </View>
        )
    }
}