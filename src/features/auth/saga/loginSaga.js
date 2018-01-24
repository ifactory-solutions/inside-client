import { takeEvery, put, call } from 'redux-saga/effects';

// TODO: Refatorar isso aqui

import {
  LOGIN_REQUEST,
  loginRequestSucceededAction,
  loginRequestFailsAction,
} from '../actions/authActions';

import { pageStartLoadingAction } from '../../../layouts/actions/pageActions';

import * as Api from '../../../utils/api';

function* loginSaga(action) {
  yield put(pageStartLoadingAction());

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
