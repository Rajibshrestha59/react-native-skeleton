/** @format */

import {takeLatest, takeEvery, fork, cancel} from 'redux-saga/effects';
import {networkSaga} from 'react-native-offline';

// WatcherSaga
function* rootSaga() {
  yield fork(networkSaga);
}

export default rootSaga;
