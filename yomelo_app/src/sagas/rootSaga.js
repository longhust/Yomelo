
import { call, all, fork } from 'redux-saga/effects';

import { watchRegister, watchVerifyAccount } from './registerSaga';

export default function* rootSaga() {
    yield [
        fork(watchRegister),
        fork(watchVerifyAccount),
    ];
}