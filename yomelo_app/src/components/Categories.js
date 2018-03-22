import React, { Component } from 'react';
import {
    View,
    FlatList,
    Text,
    Image
} from 'react-native'
import ItemCategory from './element/ItemCategories';
import HeaderTitle from './element/HeaderTitle'
import {listCategories} from '../data/listcampaign'
export default class Categories extends Component {

    static navigationOptions = {
        //headerLeft:null,
        headerTitle: <HeaderTitle title='Categories' />
    }

    render() {
        return (

            <FlatList
                data={listCategories}
                renderItem={({ item, index }) => <ItemCategory item={item} index={index}/>}
            />


        )
    }
}