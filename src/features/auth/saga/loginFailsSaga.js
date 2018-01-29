import { message } from 'antd';

import { takeEvery, put } from 'redux-saga/effects';

import { LOGIN_REQUEST_FAILS, loginErrorAction } from '../actions/authActions';
import { pageStopLoadingAction } from '../../../layouts/actions/pageActions';

function* loginRequestFailsSaga(action) {
  const error = action.payload;
  const stopLoadingAction = pageStopLoadingAction();

  yield put(loginErrorAction(error));
  yield put(stopLoadingAction);

  message.error(
    'Não foi possível realizar login. Por favor, verifique suas credenciais.'
  );
}

export function* loginRequestFailsWatcher() {
  yield takeEvery(LOGIN_REQUEST_FAILS, loginRequestFailsSaga);
}
