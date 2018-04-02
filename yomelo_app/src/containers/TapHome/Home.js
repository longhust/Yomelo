import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    FlatList
} from 'react-native';
import { Icon } from 'native-base';
import ItemCampaign from '../../components/ItemCampaign';
import { listCampaigns } from '../../data/listcampaign';
export default class Home extends Component {

    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};
        console.log("navigation", navigation)
        return {
            //header:null,
            headerLeft: null,
            headerRight: (
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <TouchableHighlight
                        style={{
                            flex: 1,
                            padding: 15,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 50,
                        }}
                        underlayColor='#d6cfcf'
                        onPress={() => { }}
                    >
                        <Image
                            source={require('../../images/search.png')}
                            style={{ width: 25, height: 25 }}
                        />

                    </TouchableHighlight>
                    <TouchableHighlight
                        style={{
                            flex: 1,
                            padding: 15,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 50,
                        }}
                        underlayColor='#d6cfcf'
                        onPress={() => { navigation.navigate('Categories') }}
                    >
                        <Image
                            source={require('../../images/menu.png')}
                            style={{ width: 25, height: 25 }}
                        />
                    </TouchableHighlight>
                </View>

            ),
            tabBarIcon: ({ focused, tintColor }) => {
                return <Icon name='ios-home-outline' style={{ color: tintColor }} />
            }
        }

    }

    render() {
        return (
            <FlatList
                data={listCampaigns}
                renderItem={({ item, index }) => <ItemCampaign navigation={this.props.navigation}/>}
            />
        )
    }
}