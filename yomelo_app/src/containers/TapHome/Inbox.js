import React, { Component } from 'react';
import {
    Container,
    Header,
    Title,
    Button,
    Icon,
    Tabs,
    Tab,
    Right,
    Left,
    Body
} from "native-base";
import HeaderTitle from '../../components/HeaderTitle';
import Messages from '../TapInbox/Messages';
import Notifications from '../TapInbox/Notifications';
export default class Inbox extends Component {

    static navigationOptions = ({ navigation }) => ({
        //header:null,
        headerLeft: null,
        headerTitle: <HeaderTitle title='Inbox' />,
        tabBarIcon: ({ focused, tintColor }) => {
            return <Icon name='ios-chatboxes-outline' style={{ color: tintColor }} />
        }
    })
    render() {
        return (
            <Container>
                <Tabs>
                    <Tab heading="Notification"
                        tabStyle={{backgroundColor:'white'}}
                        textStyle={{color:'gray'}}
                    >
                        <Notifications />
                    </Tab>
                    <Tab heading="Messages"
                        tabStyle={{backgroundColor:'white'}}
                        textStyle={{color:'gray'}}
                    >
                        <Messages />
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}