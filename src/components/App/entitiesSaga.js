import Immutable from 'immutable';
import {
  all,
  call,
  put,
  takeLatest
} from 'redux-saga/effects';

import * as api from '../../api';
import * as actions from './entitiesActions';

function* createUser({ payload }) {
  try {
    console.log(payload)
    const stop = yield call(api.createUser, payload);
    console.log(stop)
    yield put({
      type: actions.CREATE_USER_SUCCESS,
      payload: Immutable.fromJS(stop)
    });
  } catch (error) {
    yield put({ type: actions.CREATE_USER_FAILURE, payload: error });
  }
}

function* createProject({ payload }) {
  try {
    const stop = yield call(api.createProject, payload);
    yield put({
      type: actions.CREATE_PROJECT_SUCCESS,
      payload: Immutable.fromJS(stop[0].feature)
    });
  } catch (error) {
    yield put({ type: actions.CREATE_PROJECT_FAILURE, payload: error });
  }

}

function* fetchUser() {
  try {
    const user = yield call(api.fetchUser);
    yield put({
      type: actions.USER_FETCH_SUCCESS,
      payload: Immutable.fromJS(user)
    });
  } catch (error) {
    yield put({ type: actions.USER_FETCH_FAILURE, payload: error });
  }
}

function* fetchProjects() {
  try {
    const projects = yield call(api.fetchProjects);
    yield put({
      type: actions.PROJECTS_FETCH_SUCCESS,
      payload: Immutable.fromJS(projects)
    });
  } catch (error) {
    yield put({ type: actions.PROJECTS_FETCH_FAILURE, payload: error });
  }
}

function* fetchProject() {
  try {
    const project = yield call(api.fetchProject);
    yield put({
      type: actions.PROJECT_FETCH_SUCCESS,
      payload: Immutable.fromJS(project)
    });
  } catch (error) {
    yield put({ type: actions.PROJECT_FETCH_FAILURE, payload: error });
  }
}

function* fetchStaffs() {
  try {
    const staffs = yield call(api.fetchStaffs);
    yield put({
      type: actions.STAFFS_FETCH_SUCCESS,
      payload: Immutable.fromJS(staffs)
    });
  } catch (error) {
    yield put({ type: actions.STAFFS_FETCH_FAILURE, payload: error });
  }
}

function* fetchStaff() {
  try {
    const project = yield call(api.fetchStaff);
    yield put({
      type: actions.STAFF_FETCH_SUCCESS,
      payload: Immutable.fromJS(project)
    });
  } catch (error) {
    yield put({ type: actions.STAFF_FETCH_FAILURE, payload: error });
  }
}

function* Saga() {
  yield all([
    // takeLatest(actions.SOURCES_FETCH_REQUEST, fetchSources),
    takeLatest(actions.USER_FETCH_SUCCESS, fetchUser),
    // takeLatest(actions.USERS_FETCH_SUCCESS, fetchUsers),
    takeLatest(actions.STAFFS_FETCH_REQUEST, fetchStaffs),
    takeLatest(actions.STAFF_FETCH_REQUEST, fetchStaff),
    takeLatest(actions.PROJECTS_FETCH_REQUEST, fetchProjects),
    takeLatest(actions.PROJECT_FETCH_REQUEST, fetchProject),
    takeLatest(actions.CREATE_USER_REQUEST, createUser),
    takeLatest(actions.CREATE_PROJECT_REQUEST, createProject)
  ]);
}

export default Saga;
