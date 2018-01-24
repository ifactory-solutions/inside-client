import { takeEvery, put } from 'redux-saga/effects';
import history from '../../../browserHistory';
import { setToken } from '../../../utils/token';
import { LOGOUT_REQUEST, logoutSucceededAction } from '../actions/authActions';

function* logoutRequestSaga() {
  setToken(null, 24);
  history.push('/login');

  yield put(logoutSucceededAction());
}

export function* logoutRequestWatcher() {
  yield takeEvery(LOGOUT_REQUEST, logoutRequestSaga);
}
