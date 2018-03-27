import { takeEvery, put } from 'redux-saga/effects';
import history from 'utils/browserHistory';
import { setToken } from 'utils/token';
import { pageStopLoadingAction } from '../../../layouts/actions/pageActions';

import {
  loginSucceedAction,
  LOGIN_REQUEST_SUCCEEDED,
} from '../actions/authActions';

import { getUserMe } from '../../admin/users/actions';

function* loginRequestSuccessSaga(action) {
  const { token } = action.payload;
  const successAction = loginSucceedAction(action.payload);
  const stopLoadingAction = pageStopLoadingAction();
  const userMeAction = getUserMe();

  yield put(successAction);
  yield put(stopLoadingAction);
  yield put(userMeAction);

  setToken(token, 24);
  history.push('/');
}

export function* loginRequestSucceededWatcher() {
  yield takeEvery(LOGIN_REQUEST_SUCCEEDED, loginRequestSuccessSaga);
}
