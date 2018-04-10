import {
    REGISTER_ACCOUNT, REGISTER_ACCOUNT_FAIL, REGISTER_ACCOUNT_SUCCESS,
    VERIFY_ACCOUNT, VERIFY_ACCOUNT_FAIL, VERIFY_ACCOUNT_SUCSESS

} from '../actions/type';

import { Api } from './api/register';
import { put, takeLatest } from 'redux-saga/effects';

function* resgisterNewUser(action) {
    //console.log(action);
    try {
        //console.log("register")
        const result = yield Api.registerNewUser(action.newUser);
        if (result) {
            yield put({ type: REGISTER_ACCOUNT_SUCCESS, user: action.newUser });
        } else {
            yield put({ type: REGISTER_ACCOUNT_FAIL, error: 'Email existed!' });
        }
    } catch (error) {
        console.log(error)
        yield put({ type: REGISTER_ACCOUNT_FAIL, error: 'Not Connect Internet' });
    }
}
export function* watchRegister() {
    yield takeLatest(REGISTER_ACCOUNT, resgisterNewUser);
}
function* verifyAccount(action) {
    console.log("register", action)
    try {
        const result = yield Api.verifyAccount(action.user);
        if (result) {
            yield put({ type: VERIFY_ACCOUNT_SUCSESS });
        } else {
            yield put({ type: VERIFY_ACCOUNT_FAIL });
        }
    } catch (error) {
        yield put({ type: VERIFY_ACCOUNT_FAIL })
    }
}

export function* watchVerifyAccount() {
    yield takeLatest(VERIFY_ACCOUNT, verifyAccount);
}