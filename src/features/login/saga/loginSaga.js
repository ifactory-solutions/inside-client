import { takeEvery, put, call } from 'redux-saga/effects';
import {
  USER_REQUEST_LOGIN,
  loginSucceedAction,
  loginErrorAction,
} from '../actions/loginActions';

import * as Api from '../../../utils/api';

function* loginSaga(action) {
  try {
    const result = yield call(Api.doLogin, action.payload);
    const successAction = loginSucceedAction(result);

    yield put(successAction);
  } catch (error) {
    const errorAction = loginErrorAction(error);

    yield put(errorAction);
  }
}

export function* loginWatcher() {
  yield takeEvery(USER_REQUEST_LOGIN, loginSaga);
}
