import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    StatusBar
} from 'react-native'
import { Icon, Card, CardItem, Left, Right } from 'native-base';
import HeaderTitle from '../element/HeaderTitle';
import Swiper from 'react-native-swiper';
export default class Profile extends Component {

    static navigationOptions = (navigation) => ({
        header: null,
        tabBarIcon: ({ focused, tintColor }) => {
            return <Icon name='ios-contact-outline' style={{ color: tintColor }} />
        }
    })
    render() {
        return (
            <View style={styles.container}>
                <Swiper style={styles.wrapper} autoplay={true}>
                    <View style={styles.slide1}>
                        <Text style={styles.text}>Facebook</Text>
                        <StatusBar
                            barStyle="dark-content"
                            backgroundColor="#9DD6EB"
                        />
                    </View>
                    <View style={styles.slide2}>
                        <Text style={styles.text}>Instagram</Text>
                        <StatusBar
                            barStyle="dark-content"
                            backgroundColor="#97CAE5"
                        />
                    </View>
                    <View style={styles.slide3}>
                        <StatusBar
                            barStyle="dark-content"
                            backgroundColor="#92BBD9"
                        />
                        <Text style={styles.text}>Youtube</Text>
                    </View>
                </Swiper>

                <Card style={{ paddingTop: 0 }}>
                    <CardItem>
                        <Left>
                            <Image source={require('../../images/social.png')}
                                style={{ width: 25, height: 25 }}
                            />
                            <Text style={styles.textStyle}>Social account</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Icon name='ios-contact-outline' />
                            <Text style={styles.textStyle}>Profile</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Icon name='ios-people-outline' />
                            <Text style={styles.textStyle}>Contact with us</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Icon name='ios-settings-outline' />
                            <Text style={styles.textStyle}>Setting</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Image source={require('../../images/logout.png')}
                                style={{ width: 25, height: 25 }}
                            />
                            <Text style={styles.textStyle}>Signout</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </CardItem>
                </Card>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {

    },
    textStyle: {
        fontSize: 18,
        paddingLeft: 20,
    },
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
})