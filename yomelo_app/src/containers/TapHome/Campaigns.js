import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet
} from 'react-native'
import { Icon, Card, CardItem, Left, Right, Text } from 'native-base';
import HeaderTitle from '../../components/HeaderTitle';

export default class Campaigns extends Component {
    static navigationOptions = (navigation) => ({
        //header:null,

        headerLeft: null,
        headerTitle: <HeaderTitle title='Campaigns' />,
        tabBarIcon: ({ focused, tintColor }) => {
            return <Icon name='ios-folder-outline' style={{ color: tintColor }} />
        }
    });
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.imageBackground} />
                <Card>
                    <CardItem>
                        <Left>
                            <Text>Đang thực hiện</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Text>Đã kết thúc</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Text>Đã hủy</Text>
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
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
})