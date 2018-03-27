import { takeEvery } from 'redux-saga/effects';
import createApiSaga from 'utils/createApiSaga';

import { GET_CLIENTS } from '../actions';

function* getClientsSaga(action) {
  const getClients = yield createApiSaga(GET_CLIENTS, {
    method: 'get',
    path: `/company/${action.payload}/clients`,
  });

  yield getClients(action);
}

export function* getClientsSagaWatcher() {
  yield takeEvery(GET_CLIENTS, getClientsSaga);
}
