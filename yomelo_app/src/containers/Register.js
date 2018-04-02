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
import HeaderTitle from '../components/HeaderTitle'
import VerifyAccount from './VerifyAccount'
var screenSize = Dimensions.get('window');

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            fullnameValidate: false,
            username: '',
            usernameValidate: false,
            phoneNumber: '',
            phoneNumberValidate: false,
            email: '',
            emailValidate: false,
            password: '',
            passwordValidate: false
        }
    }

    static navigationOptions = {
        headerTitle: <HeaderTitle title='Register' />

    }

    validate = (text, type) => {
        if (type == 'fullname') {
            alph = /^[a-zA-Z]/;
            console.log(alph.test(text));
            if (alph.test(text)) {
                this.setState({ fullname: text })
                console.log('fullname:', text);
            }
        } else if (type == 'username') {

        } else if (type == 'phoneNumber') {

        } else if (type == 'email') {

        } else if (type = 'password') {

        }
    }

    onPressLogin = () => {

    }

    render() {
        const { value } = this.state
        return (
            <View style={styles.container}>

                <ScrollView
                    ref='scroll'
                    style={styles.bar}
                    //horizontal={true}
                    //pagingEnabled={true}
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
                                    onChangeText={text => this.validate(text, 'fullname')}
                                    onSubmitEditing={(event) => {
                                        //console.log(event);
                                        this.refs.userName._root.focus()
                                    }}
                                    value={this.state.fullname}
                                />
                            </Item>
                            <Item>
                                <Icon active name='ios-person-outline' />
                                <Input placeholder='Tên tài khoản'
                                    placeholderTextColor='#bcb7b7'
                                    returnKeyType='next'
                                    autoCorrect={false}
                                    ref={'userName'}
                                    onSubmitEditing={(event) => {
                                        //console.log(event);
                                        this.refs.phoneNumber._root.focus()
                                    }}
                                />
                            </Item>
                            <Item>
                                <Icon active name='ios-call-outline' />
                                <Input placeholder='Số điên thoại'
                                    placeholderTextColor='#bcb7b7'
                                    returnKeyType='next'
                                    keyboardType='numeric'
                                    ref={'phoneNumber'}
                                    onSubmitEditing={(event) => {
                                        //console.log(event);
                                        this.refs.email._root.focus()
                                    }}
                                />
                            </Item>
                            <Item>
                                <Icon active name='ios-mail-outline' />
                                <Input placeholder='Email'
                                    placeholderTextColor='#bcb7b7'
                                    returnKeyType='next'
                                    keyboardType='email-address'
                                    ref={'email'}
                                    onSubmitEditing={(event) => {
                                        //console.log(event);
                                        this.refs.password._root.focus()
                                    }}
                                />
                            </Item>
                            <Item>
                                <Icon active name='ios-key-outline' />
                                <Input placeholder='Mật khẩu'
                                    placeholderTextColor='#bcb7b7'
                                    secureTextEntry={true}
                                    returnKeyType='go'
                                    ref={'password'}
                                />
                            </Item>
                            {/* <Item>
                                <Icon active name='key' />
                                <Input placeholder='Confirm password'
                                    placeholderTextColor='#bcb7b7'
                                    secureTextEntry={true}
                                />
                            </Item> */}
                        </Form>
                        <View style={{ marginLeft: 20, marginRight: 20, paddingTop: 10 }}>
                            <Button block info
                                onPress={this.onPressLogin.bind(this)}
                            >
                                <Text style={{ color: 'white', fontSize: 18 }}>Sign In</Text>
                            </Button>

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
})