import { LOGIN_ACCOUNT, LOGIN_ACCOUNT_FAIL, LOGIN_ACCOUNT_SUCCESS } from '../actions/type'

const initiateState = {
    user: '',
    isLogin: false,
    loginSuccess: false,
    errorCode: null,
}

export default loginReducer = (state = initiateState, action) => {
    switch (action.type) {
        case LOGIN_ACCOUNT:
            return {
                ...state, isLogin: true, errorCode:null,
            }
        case LOGIN_ACCOUNT_SUCCESS:
            return {
                ...state, user: action.user,isLogin:false,loginSuccess:true, errorCode:null
            }
        case LOGIN_ACCOUNT_FAIL:
            return {
                ...state, errorCode: action.errorCode,isLogin:false,loginSuccess:false,
            }
        default: return initiateState
    }
}