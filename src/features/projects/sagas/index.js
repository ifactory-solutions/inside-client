import { takeEvery } from 'redux-saga/effects';
import createApiSaga from 'utils/createApiSaga';

import { GET_PROJECTS } from '../actions';

function* getProjectsSaga(action) {
  const getProjects = yield createApiSaga(GET_PROJECTS, {
    method: 'get',
    path: '/projects',
  });

  yield getProjects(action);
}

export function* getProjectsSagaWatcher() {
  yield takeEvery(GET_PROJECTS, getProjectsSaga);
}
