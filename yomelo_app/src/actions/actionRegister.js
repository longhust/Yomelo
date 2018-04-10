import {
    REGISTER_ACCOUNT, REGISTER_ACCOUNT_SUCCESS, REGISTER_ACCOUNT_FAIL,
    VERIFY_ACCOUNT, VERIFY_ACCOUNT_SUCSESS, VERIFY_ACCOUNT_FAIL
} from './type'

export const registerAccount = (newUser) => {
    return {
        type: REGISTER_ACCOUNT,
        newUser: newUser
    }
}
export const registerAccountSuccess = (user) => {
    return {
        type: REGISTER_ACCOUNT_SUCCESS,
        user: user
    }
}
export const registerAccountFaild = (error) => {
    return {
        type: REGISTER_ACCOUNT_FAIL,
        error: error
    }
}

export const verifyAccount = (user) => {
    return {
        type: VERIFY_ACCOUNT,
        user,
    }
}
export const verifyAccountSuccess = () => {
    return {
        type: VERIFY_ACCOUNT_SUCSESS
    }
}
export const verifyAccountFail = () => {
    return {
        type: VERIFY_ACCOUNT_FAIL
    }
}