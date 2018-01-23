import { takeEvery, put } from 'redux-saga/effects';
import history from '../../../browserHistory';
import { setToken } from '../../../utils/token';

import {
  loginSucceedAction,
  LOGIN_REQUEST_SUCCEEDED,
} from '../actions/loginActions';

function* loginRequestSuccessSaga(action) {
  const { token } = action.payload;
  const successAction = loginSucceedAction(action.payload);

  setToken(token, 24);
  history.push('/');

  yield put(successAction);
}

export function* loginRequestSucceededWatcher() {
  yield takeEvery(LOGIN_REQUEST_SUCCEEDED, loginRequestSuccessSaga);
}
