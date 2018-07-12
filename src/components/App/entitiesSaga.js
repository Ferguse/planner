import Immutable from 'immutable';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import * as api from '../../api';
import * as actions from './entitiesActions';

function* fetchSources() {
  try {
    const sources = yield call(api.fetchSources);
    yield put({
      type: actions.SOURCES_FETCH_SUCCESS,
      payload: Immutable.fromJS(sources)
    });
  } catch (error) {
    yield put({ type: actions.SOURCES_FETCH_FAILURE, payload: error });
  }
}

function* Saga() {
  yield all([
    takeLatest(actions.SOURCES_FETCH_REQUEST, fetchSources),
  ]);
}

export default Saga;
