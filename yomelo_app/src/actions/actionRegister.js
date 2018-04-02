import {VALIDATES_INPUT, REGISTER_ACCOUNT, REGISTER_ACCOUNT_SUSSCESS} from './type'

export const validateInput=(input)=>{
    return{
        type: VALIDATES_INPUT,
        input
    }
}
export const registerAccount=(account)=>{
    return{
        type:REGISTER_ACCOUNT,
        account
    }
}