import { takeEvery } from 'redux-saga/effects';
import { GET_USER_ME, GET_USER_ME_SUCCESS } from '../actions';
import { getUsuarioMe, getUserMeSuccess } from './workers';

export function* getUserMeWatcher() {
  yield takeEvery(GET_USER_ME, getUsuarioMe);
}

export function* getUserMeSuccessWatcher() {
  yield takeEvery(GET_USER_ME_SUCCESS, getUserMeSuccess);
}
