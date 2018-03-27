import { takeEvery, put } from 'redux-saga/effects';
import history from 'utils/browserHistory';
import { dropToken } from 'utils/token';
import { COMPANY_ID, removeValue } from 'utils/storageService';
import { LOGOUT_REQUEST, logoutSucceededAction } from '../actions/authActions';

function* logoutRequestSaga() {
  dropToken();
  removeValue(COMPANY_ID);

  history.push('/login');

  yield put(logoutSucceededAction());
}

export function* logoutRequestWatcher() {
  yield takeEvery(LOGOUT_REQUEST, logoutRequestSaga);
}
