import { takeEvery, put, call } from 'redux-saga/effects';

// TODO: Refatorar isso aqui
import history from '../../../browserHistory';

import {
  USER_REQUEST_LOGIN,
  loginSucceedAction,
  loginErrorAction,
} from '../actions/loginActions';

import { setToken } from '../../../utils/token';
import * as Api from '../../../utils/api';

function* loginSaga(action) {
  try {
    const result = yield call(Api.doLogin, action.payload);
    const successAction = loginSucceedAction(result);
    // TODO: Refatorar isso aqui
    setToken(result.token, 24);
    history.push('/');
    yield put(successAction);
  } catch (error) {
    const errorAction = loginErrorAction(error);

    yield put(errorAction);
  }
}

export function* loginWatcher() {
  yield takeEvery(USER_REQUEST_LOGIN, loginSaga);
}
