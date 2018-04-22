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
import { connect } from 'react-redux';
import { loginAccount } from '../actions/login';
import validator from '../validates/validator'
var sizeScreen = Dimensions.get('window');
class Login extends Component {

    static navigationOptions = {
        header: null,
    }
    constructor(props) {
        super(props);
        this.state = {
            inputName: '',
            password: '',
            errorMessage: ''
        }
    }
    _login() {
        Keyboard.dismiss
        const valiateEmail = validator.checkEmail(this.state.inputName);
        const validatUsername = validator.checkUsername(this.state.inputName);
        const validatePassword = validator.checkPassword(this.state.password)
        if (!valiateEmail && !validatePassword) {
            this.setState({ errorInput: "Email hoặc Username không hợp lệ" });
            return;
        }
        if (!validatePassword) {
            this.setState({ errorInput: 'Password không hợp lệ' })
            return;
        }
        if (validatePassword && (valiateEmail || validatUsername)) {
            if (valiateEmail) {
                this.props.loginAccount({ email: this.state.inputName, password: this.state.password })
            } else {
                this.props.loginAccount({ username: this.state.inputName, password: this.state.password });
            }
        }
    }
    _renderError(errorCode) {
        const errorMessage= this.state.errorMessage
        if (errorCode == 202) {
            errorMessage = 'Sai mật khẩu';
        } else if (errorCode == 204) {
            errorMessage = 'Email hoặc username không đúng';
        } else if (errorCode == 400) {
            errorMessage = 'Error Server';
        } else if (errorCode == 404) {
            errorMessage = 'Not connect to server';
        }
        return <Text style={{ color: 'red', fontSize: 12, marginTop: 5, marginBottom:5 }}>{errorMessage}</Text>
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.loginSuccess) {
            console.log(nextProps.user.is_actived == 0);
            if (nextProps.user.is_actived == 0) {
                this.props.navigation.navigate("VerifyAccount", {
                    email: nextProps.user.email,
                    password: nextProps.user.password,
                });
            } else {
                this.props.navigation.navigate("TapHome");
            }
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle='light-content' />
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
                                    onChangeText={(text) => this.setState({ inputName: text })}
                                    autoCorrect={false}
                                    onSubmitEditing={() => this.refs.txtPassword.focus()}
                                />
                                <TextInput
                                    style={styles.input}
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    placeholder='Password'
                                    placeholderTextColor='rgba(255,255,255,0.2)'
                                    returnKeyType='go'
                                    onChangeText={(text) => this.setState({ password: text })}
                                    secureTextEntry={true}
                                    autoCorrect={false}
                                    ref={'txtPassword'}
                                />
                                {this.props.errorCode == null ? null : this._renderError(this.props.errorCode)}
                                <TouchableHighlight style={styles.buttonContainer}
                                    onPress={() => this._login()}
                                    underlayColor='#0ABAEE'
                                >
                                    <Text style={styles.buttonText}>Sign In</Text>
                                </TouchableHighlight>
                                <TouchableHighlight style={{ paddingTop: 10, width: 120, borderRadius: 20, alignContent: 'center', justifyContent: 'center' }}
                                    underlayColor='#0ABAEE'
                                    onPress={() => { this.props.navigation.navigate("ForgetPassWord") }}
                                >
                                    <Text style={styles.textForgetPassword}>Quên mật khẩu ?</Text>
                                </TouchableHighlight>

                                <View style={styles.loginWithSocial}>
                                    <View style={{ flex: 1, alignItems: 'center', alignContent: 'center', shadowRadius: 20 }}>
                                        <Button full light
                                            style={[styles.buttonSocial, { backgroundColor: '#4267B2' }]}
                                        >
                                            <Icon name='logo-facebook' style={{ color: 'white' }} />
                                            <Text style={{ color: 'white' }}>Login With Facebook</Text>
                                        </Button>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: 30 }}>
                                    <Text style={{ color: 'white' }}>Đã có tài khoản?</Text>
                                    <Button transparent
                                        style={{ borderRadius: 20 }}
                                        onPress={() => this.props.navigation.navigate("Register")}
                                    >
                                        <Text style={{ color: '#0abaee' }}>Đăng ký</Text>
                                    </Button>
                                </View>
                            </View>

                        </View>


                    </View>
                </TouchableWithoutFeedback>
            </SafeAreaView>
        );
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
        alignItems: 'center'
        // opacity: 0.5
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    textForgetPassword: {
        color: 'white',
        fontSize: 15,
        textDecorationLine: 'underline',
        justifyContent: 'center'
        // textDecorationLineColor:'blue'
    },
    buttonSocial: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginWithSocial: {
        paddingTop: 15,
        flexDirection: 'row',
        //backgroundColor: 'red'
    },
});

const mapStateToProps = (state) => {
    const { user, isLogin, loginSuccess, errorCode } = state.loginReducer
    return {
        user, isLogin, loginSuccess, errorCode
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loginAccount: (params) => {
            dispatch(loginAccount(params))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)