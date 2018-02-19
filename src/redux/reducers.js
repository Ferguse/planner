import users from '../source/users';
import projects from '../source/projects';
import numberShowWeek from '../source/numberShowWeek';

export default function getDate(state = {users, projects, numberShowWeek}, action) {
    switch (action.type) {
        case 'ADD_USER':
            return state = Object.assign({}, { users: [...state.users, action.payload], projects: state.projects, numberShowWeek: state.numberShowWeek})
        case 'ADD_PROJECT':
            return state = Object.assign({}, { users: state.users, projects: [...state.projects, action.payload], numberShowWeek: state.numberShowWeek });
        default:
            return state
    }
}
