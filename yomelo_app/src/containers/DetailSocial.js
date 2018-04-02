import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class HeaderTitle extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Detail social account</Text>
            </View>
        )
    }
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    title:{
        fontSize:16,
        color:'black'
    }
})