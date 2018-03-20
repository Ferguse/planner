import Immutable from 'immutable';
import users from '../source/users';
import projects from '../source/projects';
import numberShowWeek from '../source/numberShowWeek';

export const DATA_CHANGED = 'DATA_CHANGED';
export const DATA_CHANGED_USER = 'DATA_CHANGED_USER';
export const DATA_CHANGED_USER_DATE = 'DATA_CHANGED_USER_DATE';
export const DATA_DELETE_PROJECT = 'DATA_DELETE_PROJECT';
export const DATA_DELETE_USER = 'DATA_DELETE_USER';

export const dataChanged = filter => ({
  type: DATA_CHANGED,
  payload: filter
});

export const dataChangedUser = payload => ({
  type: DATA_CHANGED_USER,
  payload
});

export const dataChangedUserDate = payload => ({
  type: DATA_CHANGED_USER_DATE,
  payload
});

export const deleteProject = payload => ({
  type: DATA_DELETE_PROJECT,
  payload
});

export const deleteUser = (payload) => ({
  type: DATA_DELETE_USER,
  payload
})

const initaialState = Immutable.fromJS({
  users,
  projects,
  numberShowWeek
});

export default function getDate(state = initaialState, { type, payload }) {
  switch (type) {
    case 'ADD_USER':
      return state.get('users').insert(state.get('users').size, payload);
    case 'ADD_PROJECT':
      return state.get('projects').insert(state.get('projects').size, payload);
    case 'DATA_CHANGED':
      return state.setIn(['projects', payload.index, payload.title], payload.value);
    case 'DATA_CHANGED_USER':
      return state.setIn(['projects', payload.index, 'workload', payload.userindex, payload.title], payload.value);
    case 'DATA_CHANGED_USER_DATE':
      return state.setIn(['projects', payload.index, 'workload', payload.userindex, 'dates', 0, payload.stage], payload.value);
    case 'DATA_DELETE_PROJECT':
      return state.deleteIn(['projects', payload]);
    case 'DATA_DELETE_USER':
      return state.deleteIn(['projects', payload.index, 'workload', payload.userindex]);
    default:
      return state;
  }
}
