
import {StackNavigator}  from 'react-navigation';
import Login from '../components/Login';
import Flash from '../components/FlashComponent';
import Categories from '../components/Categories';
import TapHome from './tapHome';
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
    }
},{
    initialRouteName:'Flash'
})