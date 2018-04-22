import { LOGIN_ACCOUNT, LOGIN_ACCOUNT_SUCCESS, LOGIN_ACCOUNT_FAIL } from './type'


export const loginAccount = (params) => {
    return {
        type: LOGIN_ACCOUNT,
        params
    }
}
export const loginSuccess = () => {
    return{
        type:LOGIN_ACCOUNT_SUCCESS,
        user:user,
    }
}
export const loginFail=(errorCode)=>{
    return{
        type:LOGIN_ACCOUNT_FAIL,
        errorCode
    }
}