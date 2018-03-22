import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
    Image,
    TextInput,
    SafeAreaView,
    Keyboard,
    Dimensions,
    KeyboardAvoidingView,
    StatusBar,
    TouchableWithoutFeedback,
} from 'react-native'

import { Button, Icon } from 'native-base';

var sizeScreen = Dimensions.get('window');
export default class Login extends Component {

    static navigationOptions = {
        header: null,
    }
    render() {
        // console.log(sizeScreen);
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle='light-content' />
                {/* <KeyboardAvoidingView behavior='height' style={styles.container}> */}
                <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                        <Image
                            style={styles.logo}
                            source={require('../images/background.png')}
                        />
                        <View style={styles.logoContainer}>

                            <View style={styles.infoInput}>
                                <Text style={{ fontSize: 25, color: 'white', textAlign: 'center', marginTop: 5, paddingBottom: 100 }}>Yomelo</Text>
                                <Text style={{ fontSize: 15, color: 'white', textAlign: 'center', opacity: 0.9, paddingBottom: 10 }}>Đăng nhập tài khoản</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Username/Email'
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    placeholderTextColor='rgba(255,255,255,0.2)'
                                    keyboardType='email-address'
                                    returnKeyType='next'
                                    autoCorrect={false}
                                    onSubmitEditing={() => this.refs.txtPassword.focus()}
                                />
                                <TextInput
                                    style={styles.input}
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    placeholder='Mật khẩu'
                                    placeholderTextColor='rgba(255,255,255,0.2)'
                                    returnKeyType='go'
                                    secureTextEntry={true}
                                    autoCorrect={false}
                                    ref={'txtPassword'}
                                />
                                <TouchableHighlight style={styles.buttonContainer}
                                    onPress={()=>this.props.navigation.navigate('TapHome')}
                                >
                                    <Text style={styles.buttonText}>Sign In</Text>
                                </TouchableHighlight>
                                <TouchableHighlight>
                                    <Text style={styles.textForgetPassword}>Quên mật khẩu ?</Text>
                                </TouchableHighlight>

                                <View style={styles.loginWithSocial}>
                                    <View style={{ flex: 1, alignItems: 'center', alignContent: 'center', shadowRadius:20 }}>
                                        <Button full light
                                            style={[styles.buttonSocial, { backgroundColor: '#4267B2' }]}
                                        >
                                            <Icon name='plane' />
                                            <Text>Facebook</Text>
                                        </Button>
                                    </View>
                                    <View style={{ flex: 1, alignItems: 'center' }}>
                                        <Button full light
                                            style={[styles.buttonSocial, { backgroundColor: '#db4437' }]}
                                        >
                                            <Icon name='plane' />
                                            <Text>Google+</Text>
                                        </Button>
                                    </View>
                                </View>
                                <View style={styles.loginWithSocial}>
                                    <View style={{ flex: 1, alignItems: 'center', alignContent: 'center' }}>
                                        <Button full light
                                            style={[styles.buttonSocial, { backgroundColor: '#1da1f2' }]}
                                        >
                                            <Icon name='plane' />
                                            <Text>Twitter</Text>
                                        </Button>
                                    </View>
                                    <View style={{ flex: 1, alignItems: 'center' }}>
                                        <Button full light
                                            style={[styles.buttonSocial, { backgroundColor: '#d62d78' }]}
                                        >
                                            <Icon name='plane' />
                                            <Text>Instagram</Text>
                                        </Button>
                                    </View>
                                </View>
                            </View>

                        </View>


                    </View>
                </TouchableWithoutFeedback>
                {/* </KeyboardAvoidingView> */}

            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(32,53,70)',
        flexDirection: 'column'
    },
    logoContainer: {
        // position: 'absolute',
        // left: 0,
        // right: 0,
        // top: 100,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    logo: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        width: sizeScreen.width,
        height: sizeScreen.height,
    },
    infoInput: {
        position: 'absolute',
        left: 0,
        right: 0,
        // bottom: 100,
        // height: 200,
        // // backgroundColor:'red'
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#FFF',
        paddingHorizontal: 10,
        marginBottom: 10,
        shadowRadius: 20

    },
    buttonContainer: {
        backgroundColor: '#0ABAEE',
        paddingVertical: 10,
        opacity: 0.5
    },
    buttonText: {
        textAlign: 'center',
        color: 'rgb(32,53,70)',
        fontWeight: 'bold',
        fontSize: 18,
    },
    textForgetPassword: {
        color: 'white',
        fontSize: 15,
        alignItems: 'center',
        textDecorationLine: 'underline',
        // textDecorationLineColor:'blue'
    },
    buttonSocial: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginWithSocial: {
        paddingTop: 10,
        flexDirection: 'row',
        //backgroundColor: 'red'
    },
})