import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import { Button, Icon } from 'native-base';
import { verifyAccount } from '../actions/actionRegister';
import { connect } from 'react-redux'
var screenSize = Dimensions.get('window');
class VerifyAccount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            code: ''
        }
    }
    renderCofirm(confirmSuccess) {
        return (
            confirmSuccess == null ? null :
                (confirmSuccess ? <Icon name='ios-checkmark-outline' style={{ color: 'green' }} />
                    : <Icon name='ios-alert-outline' style={{ color: 'red' }} />)
        )
    }

    render() {
        const { email,password } = this.props.navigation.state.params
        return (
            <View style={styles.container}>
                <Text>Vui lòng nhập mã kích hoạt</Text>
                <Text>Hoặc kích hoạt qua email của bạn</Text>
                <Text>Mã code gồm 6 chữ số</Text>
                <TextInput
                    placeholder='123456'
                    underlineColorAndroid='white'
                    style={styles.input}
                    maxLength={6}
                    keyboardType='numeric'
                    onChangeText={(text) => { this.setState({ code: text }) }}
                />
                {this.renderCofirm(this.props.confirmSuccess)}
                <View style={{ alignItems: 'center', paddingTop: 20 }}>
                    <Button info style={{ alignItems: 'center', justifyContent: 'center', width: 100 }}
                        onPress={() => this.props.verifyAccount({ token: this.state.code,email:email, password:password })}
                    >
                        <Text style={{ color: 'white' }}>Confirm</Text>
                    </Button>
                </View>
                <TouchableOpacity style={styles.buttonNext}
                    disabled={true}
                    onPress={() => { this.setState({ confirmSuccess: true }) }}
                >
                    <Icon name='ios-arrow-dropright-outline'
                        style={{ fontSize: 50, color: this.state.confirmSuccess ? 'gray' : '#4267B2' }} />
                </TouchableOpacity>
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
        backgroundColor: 'white'
    },
    title: {
        fontSize: 16,
        color: 'black'
    },
    input: {
        width: 100,
        borderColor: 'gray',
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 5
    },
    buttonNext: {
        position: 'absolute',
        right: 50,
        bottom: 50,
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
const mapStateToProps = (state) => {
    const { isConfirm, confirmSuccess } = state.registerReducer;
    return {
        isConfirm,
        confirmSuccess
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        verifyAccount: (code) => {
            dispatch(verifyAccount(code))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(VerifyAccount);
