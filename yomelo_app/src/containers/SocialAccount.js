import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native';
import ItemSocial from '../components/ItemSocial';

export default class HeaderTitle extends Component {

    static navigationOptions={
        title:'Social Accounts'
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[{ key: '1', type: 'logo-facebook', name:'Fimter',avatar:'https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-9/29496683_1250390355105072_8456415908582129664_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeGiG-bf_4W0gACW3k3WJiuGkDlquUx8uxhb25KO9pEMODburXxr0hkVSYjVinawq3Za_LiRbZRhZEprMkVi3tBkMwt9BirS8eqIzgkketmU6w&oh=24441a52ead33e3a5a078c9bd25e28e7&oe=5B6F54D1'  }, 
                    { key: '2', type: 'logo-instagram', name:'Austom', avatar:'https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-9/26113716_896422690508318_1430233841712762827_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeFngWvBP2dpX5L3Aofyxwpn0CzEqsCh9BGGZ0p8le-aqC4etM7YLUoyQNr4Efx7zRBqzpWWrsg1EfTd2UbtJqIIsmevG7JbJvcGwM3LTVzhXA&oh=12d6f2881932b33f00e9f03a20dfb2cf&oe=5B6AEEDC' }]}
                    renderItem={({item, index})=><ItemSocial item={item}/>}
                />
                {/* <Icon name=''/> */}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    title: {
        fontSize: 16,
        color: 'black'
    }
})