import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native';
import {
    Thumbnail,
    Icon
} from 'native-base';
import Lightbox from 'react-native-lightbox';
export default class ItemSocial extends Component {
    render() {
        const { type, avatar, name } = this.props.item;
        console.log('item', this.props.item);
        return (
            <View style={styles.container}>
                <View style={{justifyContent:'center', alignItems:'center', padding:5}}>
                    <Icon name={type} style={{width:40,height:40}}/>
                </View>
                <View style={{justifyContent:'center', alignItems:'center', padding:5}}> 
                    <Thumbnail large source={{ uri: avatar }} style={{width:40, height:40}}/>
                </View>
                <View style={{justifyContent:'center', alignItems:'center', padding:5}}>
                    <Text>{name}</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        backgroundColor:'white',
    }
})