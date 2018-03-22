import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    StyleSheet,
} from 'react-native'
import { Container, Content, Button, Icon } from 'native-base';

var sizeScreen = Dimensions.get('window');
export default class Login extends Component {

    static navigationOptions = {
        header: null
    }

    render() {
        // console.log(sizeScreen);
        return (
            <View style={[styles.container,{alignItems:'stretch'}]}>
                <Image
                    style={styles.image}
                    source={require('../images/lauch1.png')}
                />
                <View style={styles.container}>
                    <Text style={styles.textTitle}>Yomelo</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.textSlogan}>Wellcome to yomelo, Apply with us</Text>
                </View>
                <View style={[styles.container,{alignItems:'stretch'}]}>
                    <Button block primary
                       style={{opacity:0.6}}
                    >
                        <Text style={{color:'white'}}>SIGN UP</Text>
                    </Button>

                    <Button block light
                        style={{backgroundColor:null}}
                        onPress={()=>this.props.navigation.navigate('Login')}
                    >
                        <Text style={{color:'white'}}>LOG IN</Text>
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        position: 'absolute',
        right: 0,
        left: 0,
        top: 0,
        bottom: 0,
        width: sizeScreen.width,
        height: sizeScreen.height,
    },
    textTitle: {
        color: 'black',
        fontSize: 25,
    },
    textSlogan: {
        color: 'white',
        fontSize: 15,
    },
    button: {
        paddingBottom: 10,
    }
})