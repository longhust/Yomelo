import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet, TouchableHighlight
} from 'react-native';

export default class ItemCategory extends Component {
    render() {
        const { index, item } = this.props;
        return (
            <View style={{ flexDirection: 'column' }}>
                <View style={styles.container}>

                    <TouchableHighlight
                        onPress={()=>{}}
                        underlayColor='gray'
                    >
                        <Image
                            source={require('../../images/heart.png')}
                            style={styles.image}
                        />
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={()=>{}}
                        underlayColor='gray'
                    >
                        <Text style={styles.text}>{item.category}</Text>
                    </TouchableHighlight>

                </View>
                <View style={{ height: 0.5, backgroundColor: 'gray' }}></View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        //backgroundColor:'white',
        //justifyContent:'center',
        alignItems: 'center',
        height: 50,
    },
    buttonCategory:{
        flex:5
    },
    buttonImage:{
        flex:1
    },
    text: {
        color: 'black',
        fontSize: 18,
        paddingLeft: 15,
        //backgroundColor: 'white'
    },
    image: {
        width: 10,
        height: 10,
        padding: 15,
    }
});
