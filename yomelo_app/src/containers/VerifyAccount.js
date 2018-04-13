import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Dimensions,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import { Button, Icon } from 'native-base';
import { verifyAccount } from '../actions/actionRegister';
import { connect } from 'react-redux'
var screenSize = Dimensions.get('window');
class VerifyAccount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            code: '',
            enableInput: true
        }
    }

    render() {
        const { email, password } = this.props.navigation.state.params
        return (
            <View style={styles.container}>
                <Text>Vui lòng nhập mã kích hoạt</Text>
                <Text>Hoặc kích hoạt qua email của bạn</Text>
                <Text>Mã code gồm 6 chữ số</Text>

                {this.props.confirmSuccess ?
                    (
                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <Text style={{ color: 'green', marginTop: 10 }}>Verify Success</Text>
                            <Icon name='ios-checkmark-circle-outline' style={{ color: 'green' }} />
                        </View>
                    ) :
                    (<View>
                        <TextInput
                            placeholder='123456'
                            underlineColorAndroid='white'
                            style={styles.input}
                            maxLength={6}
                            keyboardType='numeric'
                            editable={this.state.enableInput}
                            onChangeText={(text) => { this.setState({ code: text }) }}
                        />
                        <View style={{ alignItems: 'center', paddingTop: 20 }}>
                            <Button info style={{ alignItems: 'center', justifyContent: 'center', width: 100 }}
                                onPress={() => this.props.verifyAccount({ token: this.state.code, email: email, password: password })}
                            >
                                <Text style={{ color: 'white' }}>Confirm</Text>
                            </Button>
                        </View>
                    </View>)}

                <TouchableOpacity
                    style={[styles.buttonNext, { borderColor: !this.props.confirmSuccess ? 'rgba(29, 161, 242,0.4)' : '#1da1f2' }]}
                    disabled={!this.props.confirmSuccess}
                    onPress={() => { this.props.navigation.navigate("SocialConnection") }}
                >
                    <Text style={{ padding: 5, fontSize: 20, color: !this.props.confirmSuccess ? 'rgba(29, 161, 242,0.4)' : '#1da1f2' }}>Next</Text>
                    <Icon name='ios-arrow-dropright-outline'
                        style={{ padding: 5, fontSize: 25, color: !this.props.confirmSuccess ? 'rgba(29, 161, 242,0.4)' : '#1da1f2' }} />
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
    confirmContainer: {
        flexDirection: 'row'
    },
    title: {
        fontSize: 16,
        color: 'black'
    },
    input: {
        width: 100,
        borderColor: 'gray',
        fontSize: 25,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 5
    },
    buttonNext: {
        flexDirection: 'row',
        position: 'absolute',
        right: 30,
        bottom: 50,
        margin: 10,
        borderRadius: 5,
        borderWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 20,

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
