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

// const FBSDK = require('react-native-fbsdk');
// const {
//   LoginManager,
// } = FBSDK;

export default class SocialConnection extends Component {

    static navigationOptions = {
        header: null,
    }
    // _fbAuth() {
    //     LoginManager.logInWithReadPermissions(['public_profile']).then(
    //         function (result) {
    //             if (result.isCancelled) {
    //                 alert('Login cancelled');
    //             } else {
    //                 alert('Login success with permissions: '
    //                     + result.grantedPermissions.toString());
    //             }
    //         },
    //         function (error) {
    //             alert('Login fail with error: ' + error);
    //         }

    //     )
    // }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.imageBackGround}
                    source={require('../images/backgroundSocial.png')}
                />
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ margin: 20 }}>Vui lòng kết nối tới mạng xã hội của bạn</Text>
                </View>

                <ButtonIcon urlImage={require('../images/facebook.png')} />
                <ButtonIcon urlImage={require('../images/instagram.png')} />
                <ButtonIcon urlImage={require('../images/twitter.png')} />
                <ButtonIcon urlImage={require('../images/youtube.png')} />

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