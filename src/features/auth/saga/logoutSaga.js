import { takeEvery, put } from 'redux-saga/effects';
import history from '../../../browserHistory';
import { dropToken } from '../../../utils/token';
import { LOGOUT_REQUEST, logoutSucceededAction } from '../actions/authActions';

function* logoutRequestSaga() {
  dropToken();
  history.push('/login');

  yield put(logoutSucceededAction());
}

export function* logoutRequestWatcher() {
  yield takeEvery(LOGOUT_REQUEST, logoutRequestSaga);
}
