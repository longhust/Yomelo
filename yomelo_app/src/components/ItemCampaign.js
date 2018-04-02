import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    TouchableHighlight
} from 'react-native';
import {
    Container, Header, Content, Card, CardItem, Thumbnail,
    Text, Button, Icon, Left, Body, Right
} from 'native-base';
import Lightbox from 'react-native-lightbox';
export default class ItemCampaign extends Component {
    render() {
        return (
            <Card>
                <TouchableHighlight onPress={()=>{this.props.navigation.navigate('DetailCampaign')}}>
                <CardItem style={{padding:0}}>
                    <Left>
                        <Thumbnail source={{ uri: 'https://scontent.fhan5-2.fna.fbcdn.net/v/t1.0-9/15542099_1849719475247292_2307356324985357140_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeHL6eFYlj8n_XHFQ_drqHAqJR6teCfpau1bdI76MjtGZcmu53Fzzuc0LXp7Q58megcrNZ7n64aqfoAmvogpKHiuDUCEdUh6gu4e8fdPaBUq7A&oh=5be2793aec49f1db07c289e25d8a2dc0&oe=5B271EA5' }} />
                        <Body>
                            <Text>Guzanman y Gomez</Text>
                            <Text note>Post of you enjoying our food in Bondi</Text>
                        </Body>
                    </Left>
                </CardItem>
                </TouchableHighlight>
                <CardItem cardBody>
                    <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwfMzZWidbLDPeiep0Gtn2B1pi_1GGtgBQrKcxpJSnuCDSQ3KidQ' }}
                        style={{ height: 200, width: null, flex: 1 }} />
                </CardItem>
               
            </Card>
        )
    }
}