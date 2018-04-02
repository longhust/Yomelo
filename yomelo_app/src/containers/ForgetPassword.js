import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Dimensions
} from 'react-native';
import { Button, Form, Item, Input } from 'native-base';
var screenSize = Dimensions.get('window');
export default class ForgetPassWord extends Component {
    static navigationOption = {
        title: 'Forget Password'
    }
    render() {
        return (
            <View style={styles.container}>
                <Form style={{ padding: 5, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#0abaee' }}>Vui lòng nhập email</Text>
                    <Item>
                        <Input placeholder='Email'
                            placeholderTextColor='#9e9c9c'
                            style={{ width: 200 }}
                        />
                    </Item>
                </Form>
                <View style={{ marginLeft: 20, marginRight: 20, paddingTop: 10 }}>
                    <Button block info
                        onPress={() => { }}
                    >
                        <Text style={{ color: 'white', fontSize: 18, marginLeft: 10, marginRight: 10 }}>Gưi lại mã code</Text>
                    </Button>

                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 50,
        backgroundColor: 'white',
        width: screenSize.width,
    },
    title: {
        fontSize: 16,
        color: 'black'
    }
})