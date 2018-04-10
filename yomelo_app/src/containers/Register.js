import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Dimensions,
    Slider,
    StatusBar,
    Text
} from 'react-native';
import { Button, Input, Label, Item, Form, Icon } from 'native-base';
import HeaderTitle from '../components/HeaderTitle';
import { registerAccount } from '../actions/actionRegister'
import validator from '../validates/validator'
import { connect } from 'react-redux'
var screenSize = Dimensions.get('window');
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            nameValidate: null,
            username: '',
            usernameValidate: null,
            phone: '',
            phoneValidate: null,
            email: '',
            emailValidate: null,
            password: '',
            passwordValidate: null,
        }
    }

    static navigationOptions = {
        headerTitle: <HeaderTitle title='Register' />
    }


    validateFullName = (name) => {
        const result = validator.checkFullName(name)
        this.setState({ name: name, nameValidate: result })

    }
    validateUsername = (username) => {
        const result = validator.checkUsername(username)
        this.setState({ username: username, usernameValidate: result })

    }
    validatePhonenumber = (phone) => {
        const result = validator.checkPhoneNumber(phone) ? true : false
        this.setState({ phone: phone, phoneValidate: result })

    }
    validateEmail = (email) => {
        const result = validator.checkEmail(email);
        this.setState({ email: email, emailValidate: result })

    }
    validatePassword = (password) => {
        const result = validator.checkPassword(password)
        this.setState({ password: password, passwordValidate: result })

    }
    _renderValidate = (validate) => {
        //console.log("validate", validate);
        return (

            validate == null ? null : (validate ? <Icon name='ios-checkmark-outline' style={{ color: 'green' }} /> :
                <Icon name='ios-alert-outline' style={{ color: 'red' }} />)
        )
    }

    onPressLogin = () => {
        const { name, username, phone, email, nameValidate, password, usernameValidate, emailValidate, phoneValidate, passwordValidate } = this.state
        if (nameValidate && usernameValidate && emailValidate && phoneValidate && passwordValidate) {
            this.props.registerAccount({ name, username, phone, email, password, type: 'INFLUENCER' });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.success) {
            this.props.navigation.navigate("VerifyAccount",{
                email:nextProps.user.email,
                password:nextProps.user.password,
            });
        }
    }
    render() {
        const { value } = this.state
        return (
            <View style={styles.container}>

                <ScrollView
                    ref='scroll'
                    style={styles.bar}
                    scrollEnabled={true}
                >
                    <View style={styles.step}>
                        <Form style={{ padding: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#0abaee', fontSize: 15, justifyContent: 'center', paddingBottom: 10 }}>Nhập thông tin tài khoản</Text>
                            <Item>
                                <Icon active name='ios-person-add-outline' />
                                <Input placeholder='Họ và Tên'
                                    placeholderTextColor='#bcb7b7'
                                    autoCorrect={false}
                                    returnKeyType='next'
                                    onChangeText={text => this.validateFullName(text)}
                                    onSubmitEditing={(event) => {
                                        this.refs.userName._root.focus();
                                    }}
                                    value={this.state.name}
                                />
                                {this._renderValidate(this.state.nameValidate)}
                            </Item>
                            <Item>
                                <Icon active name='ios-person-outline' />
                                <Input placeholder='Tên tài khoản'
                                    placeholderTextColor='#bcb7b7'
                                    returnKeyType='next'
                                    autoCorrect={false}
                                    ref={'userName'}
                                    onChangeText={text => this.validateUsername(text)}
                                    onSubmitEditing={(event) => {
                                        this.refs.phone._root.focus();
                                    }}
                                />
                                {this._renderValidate(this.state.usernameValidate)}
                            </Item>
                            <Item>
                                <Icon active name='ios-call-outline' />
                                <Input placeholder='Số điên thoại'
                                    placeholderTextColor='#bcb7b7'
                                    returnKeyType='next'
                                    keyboardType='numeric'
                                    ref={'phone'}
                                    onChangeText={text => this.validatePhonenumber(text)}
                                    onSubmitEditing={(event) => {

                                        this.refs.email._root.focus()
                                    }}
                                />
                                {this._renderValidate(this.state.phoneValidate)}
                            </Item>
                            <Item>
                                <Icon active name='ios-mail-outline' />
                                <Input placeholder='Email'
                                    placeholderTextColor='#bcb7b7'
                                    returnKeyType='next'
                                    keyboardType='email-address'
                                    ref={'email'}
                                    onChangeText={text => this.validateEmail(text)}
                                    onSubmitEditing={(event) => {

                                        this.refs.password._root.focus()
                                    }}
                                />
                                {this._renderValidate(this.state.emailValidate)}
                            </Item>
                            <Item>
                                <Icon active name='ios-key-outline' />
                                <Input placeholder='Mật khẩu'
                                    placeholderTextColor='#bcb7b7'
                                    secureTextEntry={true}
                                    returnKeyType='next'
                                    ref={'password'}
                                    onChangeText={text => this.validatePassword(text)}
                                    onSubmitEditing={(event) => {
                                    }}
                                />
                                {this._renderValidate(this.state.passwordValidate)}
                            </Item>
                        </Form>

                        <View style={{ marginLeft: 20, marginRight: 20, paddingTop: 10 }}>
                            {this.props.isRegister ? null :
                                <Button block info
                                    onPress={this.onPressLogin.bind(this)}
                                >
                                    <Text style={{ color: 'white', fontSize: 18 }}>Sign In</Text>
                                </Button>
                            }
                        </View>

                        <View style={{ marginLeft: 70, marginRight: 70, paddingTop: 20, alignItems: 'center' }}>
                            <Text style={{ paddingBottom: 20 }}>Hoặc</Text>
                            <Button full light
                                style={[styles.buttonSocial, { backgroundColor: '#4267B2', borderRadius: 5 }]}
                            >
                                <Icon name='logo-facebook' style={{ color: 'white' }} />
                                <Text style={{ color: 'white' }}>Sign In With Facebook</Text>
                            </Button>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
                            <Text>Đã có tài khoản?</Text>
                            <Button transparent
                                style={{ borderRadius: 20 }}
                                onPress={() => this.props.navigation.navigate("Login")}
                            >
                                <Text style={{ color: '#0abaee' }}>Đăng nhập</Text>
                            </Button>
                        </View>

                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    bar: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        color: 'black'
    },
    step: {
        //flex: 1,
        flexDirection: 'column',
        width: screenSize.width,
        justifyContent: 'center',
    },
});

const mapStateToProps = (state) => {
    const { user, isRegister, success, error } = state.registerReducer;
    return {
        user,
        isRegister,
        success,
        error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        registerAccount: (newUser) => {
            dispatch(registerAccount(newUser))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register)