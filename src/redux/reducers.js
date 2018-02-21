import users from '../source/users';
import projects from '../source/projects';
import numberShowWeek from '../source/numberShowWeek';
import Immutable from 'immutable';

const initaialState = Immutable.fromJS(
  {
    users,
    projects,
    numberShowWeek
  }
)

export default function getDate(state = initaialState, action) {
    switch (action.type) {
        case 'ADD_USER':
            return state.get('users').insert(state.get('users').size, action.payload);
        case 'ADD_PROJECT':
            return state.get('projects').insert(state.get('projects').size, action.payload);
        default:
            return state
    }
}
