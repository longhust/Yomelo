import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Dimensions
} from 'react-native';
import { Button } from 'native-base';
var screenSize = Dimensions.get('window');
export default class VerifyAccount extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Vui lòng nhập mã kích hoạt</Text>
                <Text>Mã code gồm 6 chữ số</Text>
                <TextInput
                    underlineColorAndroid='white'
                    style={{ width: 100, borderColor:'gray', paddingTop:10 }}
                    maxLength={6} />
                <View style={{ alignItems: 'center', paddingTop: 20 }}>
                    <Button info style={{ alignItems: 'center', justifyContent: 'center', width: 100 }}
                        onPress={() => { }}
                    >
                        <Text style={{ color: 'white' }}>Confirm</Text>
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
        //justifyContent: 'center',
        width: screenSize.width,
    },
    title: {
        fontSize: 16,
        color: 'black'
    }
})