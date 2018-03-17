import Immutable from 'immutable';
import users from '../source/users';
import projects from '../source/projects';
import numberShowWeek from '../source/numberShowWeek';

export const DATA_CHANGED = 'DATA_CHANGED';
export const dataChanged = filter => ({
  type: DATA_CHANGED,
  payload: filter
});

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
      // let result = state.get('projects').find(i => i.get('id') === payload.id).set('title', payload.title);
      // result = state.get('projects').find(i => i.get('id') === payload.id).set('content', payload.content);
      // result = state.get('projects').find(i => i.get('id') === payload.id).set('color', payload.color);
      console.log(state.updateIn(['projects'], list => list.set(payload.id, payload)).toJS())
      return state.updateIn(['projects'], list => list.set(payload.id, payload));
    default:
      return state;
  }
}
