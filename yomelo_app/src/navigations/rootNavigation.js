
import {StackNavigator}  from 'react-navigation';
import Login from '../containers/Login';
import Flash from '../containers/FlashComponent';
import Categories from '../containers/Categories';
import TapHome from './tapHome';
import Register from '../containers/Register';
import ForgetPassWord from '../containers/ForgetPassword';
import DetailCampaign from '../containers/DetailCampaign';
import SocialAccount from '../containers/SocialAccount';
import DetailSocial from '../containers/DetailSocial';

export default RootNavigation = StackNavigator({
    Flash:{
        screen: Flash
    },
    Login:{
        screen:Login
    },
    TapHome:{
        screen:TapHome
    },
    Categories:{
        screen:Categories
    },
    Register:{
        screen:Register
    },
    ForgetPassWord:{
        screen:ForgetPassWord
    },
    DetailCampaign:{
        screen:DetailCampaign,
    },
    SocialAccount:{
        screen:SocialAccount
    },
    DetailSocial:{
        screen:DetailSocial
    }
},{
    initialRouteName:'Flash'
})