import { combineReducers } from 'redux';

import registerReducer from './reducerRegister';
import loginReducer from './reducerLogin';

export default allReducers = combineReducers({
    registerReducer,
    loginReducer
})