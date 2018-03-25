import { takeEvery } from 'redux-saga/effects';

export const makeSagaWatcher = (actionName, sagaWorker) =>
  function* createContratoSagaSuccessWatcher() {
    yield takeEvery(actionName, sagaWorker);
  };
