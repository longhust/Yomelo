
import { call, all, fork } from 'redux-saga/effects';

import { watchRegister, watchVerifyAccount } from './registerSaga';
import { watchLoginAccount } from './loginAccount'

export default function* rootSaga() {
    yield [
        fork(watchLoginAccount),        
        fork(watchRegister),
        fork(watchVerifyAccount),
    ];
}