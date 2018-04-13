import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import { Icon } from 'react-native-vector-icons';
export default class HeaderTitle extends Component {
    render() {
        //const url=this.props.urlImage;
        return (
            <TouchableOpacity style={styles.container}
                onPress={this.props.onPress}
            >
                <Image style={styles.image}
                    source={this.props.urlImage}
                />
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor:'gray',
        borderRadius:20,
        margin:15,
        height:50,

    },
    image: {
        width:30,
        height:30,
    }
})