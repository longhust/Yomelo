import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import ButtonIcon from '../components/elements/ButtonIcon';
const screen = Dimensions.get("window");

const FBSDK = require('react-native-fbsdk');
const {
    LoginManager,
} = FBSDK;

export default class SocialConnection extends Component {

    static navigationOptions = {
        header: null,
    }
    
    

    render() {
        return (
            <View style={styles.container}>
               

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    title: {
        flexDirection: 'column',
        fontSize: 16,
        color: 'black'
    },
    imageBackGround: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        width: screen.width,
        height: screen.height,
    }
})