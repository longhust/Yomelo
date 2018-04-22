import { LOGIN_ACCOUNT, LOGIN_ACCOUNT_FAIL, LOGIN_ACCOUNT_SUCCESS } from '../actions/type';

import { put, takeLatest } from 'redux-saga/effects';
import { ApiLogin } from './api/login';

function* loginAccount(action) {
    try {
        const result = yield ApiLogin.loginAccount(action.params);
        const code = result.code
        console.log("code:",code);
        if (code == 200) {
            yield put({type: LOGIN_ACCOUNT_SUCCESS, user: result.user });
        } else {
            yield put({type: LOGIN_ACCOUNT_FAIL, errorCode: code })
        }
    } catch (error) {
        yield put({type: LOGIN_ACCOUNT_FAIL, errorCode: 404 })
    }
}
export function* watchLoginAccount() {
    yield takeLatest(LOGIN_ACCOUNT, loginAccount)
}