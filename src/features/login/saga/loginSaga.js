import { takeEvery, put, call } from 'redux-saga/effects';

// TODO: Refatorar isso aqui

import {
  LOGIN_REQUEST,
  loginRequestSucceededAction,
  loginRequestFailsAction,
} from '../actions/loginActions';

import * as Api from '../../../utils/api';

function* loginSaga(action) {
  try {
    const result = yield call(Api.doLogin, action.payload);
    yield put(loginRequestSucceededAction(result));
  } catch (error) {
    yield put(loginRequestFailsAction(error));
  }
}

export function* loginWatcher() {
  yield takeEvery(LOGIN_REQUEST, loginSaga);
}
