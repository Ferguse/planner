import { all, fork } from 'redux-saga/effects';

import EntitiesSaga from './entitiesSaga';
import UiSaga from './uiSaga';

const sagas = [EntitiesSaga, UiSaga];

function* Saga() {
  yield all(sagas.map(saga => fork(saga)));
}

export default Saga;
