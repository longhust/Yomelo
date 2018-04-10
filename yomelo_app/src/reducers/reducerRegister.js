import {
    REGISTER_ACCOUNT, REGISTER_ACCOUNT_FAIL, REGISTER_ACCOUNT_SUCCESS,
    VERIFY_ACCOUNT, VERIFY_ACCOUNT_FAIL, VERIFY_ACCOUNT_SUCSESS
} from '../actions/type';

const initiateState = {
    user: '',
    isRegister: false,
    success: false,
    error: false,
    isConfirm: false,
    confirmSuccess: null,
}

const registerReducer = (state = initiateState, action) => {
    switch (action.type) {
        case REGISTER_ACCOUNT:
            return {
                ...state, isRegister: true,
            }
        case REGISTER_ACCOUNT_SUCCESS:
            return {
                ...state, isRegister: false, success: true, user: action.user
            }
        case REGISTER_ACCOUNT_FAIL:
            return {
                ...state, isRegister: false, success: false, error: true
            }
        case VERIFY_ACCOUNT:
            return {
                ...state, isConfirm: true
            }
        case VERIFY_ACCOUNT_SUCSESS:
            return {
                ...state, confirmSuccess: true
            }
        case VERIFY_ACCOUNT_FAIL:
            return {
                ...state, confirmSuccess: false
            }
        default:
            return initiateState;
    }
}

export default registerReducer;