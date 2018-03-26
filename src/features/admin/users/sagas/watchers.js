import { takeEvery } from 'redux-saga/effects';
import { GET_USER_ME } from '../actions';
import { getUsuarioMe } from './workers';

export function* getUsuarioMeWatcher() {
  yield takeEvery(GET_USER_ME, getUsuarioMe);
}
