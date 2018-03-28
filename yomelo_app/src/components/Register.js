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
import HeaderTitle from './element/HeaderTitle'
var screenSize = Dimensions.get('window');

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            positionScroll: 0,
            value: 1,
        }
    }

    static navigationOptions = {
        headerTitle: <HeaderTitle title='Register' />

    }

    change(value) {
        this.setState(() => {
            return {
                value: parseFloat(value),
            };
        });
    }
    onPressLogin = () => {
        const newPosition = this.state.positionScroll + screenSize.width;

        this.setState({ positionScroll: newPosition, value: this.state.value + 1 });
        this.refs.scroll.scrollTo({ x: newPosition, y: 0, animated: true })
    }

    render() {
        const { value } = this.state
        return (
            <View style={styles.container}>

                <ScrollView
                    ref='scroll'
                    horizontal={true}
                    pagingEnabled={true}
                    scrollEnabled={false}
                >
                    <View style={styles.step}>
                        <Form style={{ padding: 5, justifyContent:'center', alignItems:'center' }}>
                            <Text style={{ color: '#0abaee', fontSize: 15,justifyContent:'center', alignContent:'center'}}>Nhập thông tin tài khoản</Text>
                            <Item>
                                <Input placeholder='Fullname' placeholderTextColor='#bcb7b7' />
                            </Item>
                            <Item>
                                <Input placeholder='Username' placeholderTextColor='#bcb7b7' />
                            </Item>
                            <Item>
                                <Input placeholder='Email' placeholderTextColor='#bcb7b7' />
                            </Item>
                            <Item>
                                <Input placeholder='Password' placeholderTextColor='#bcb7b7' />
                            </Item>
                            <Item>
                                <Input placeholder='Confirm password' placeholderTextColor='#bcb7b7' />
                            </Item>
                        </Form>
                        <View style={{ marginLeft: 20, marginRight: 20, paddingTop:10 }}>
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
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Text>Đã có tài khoản?</Text>
                            <Button transparent
                                style={{borderRadius:20}}
                                onPress={() => this.props.navigation.navigate("Login")}
                            >
                                <Text style={{ color: '#0abaee' }}>Đăng nhập</Text>
                            </Button>
                        </View>

                    </View>
                    <View style={styles.step}>
                        <Text>Nhập mã xác thực</Text>
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