import Immutable, { Map } from 'immutable';

// sources
import users from '../../source/users';
import projects from '../../source/projects';

// actions
import * as uiActions from './uiActions';

// INITIAL STATE
export const initialState = Map({
  users: Immutable.fromJS(users),
  projects: Immutable.fromJS(projects),
  selectedUser: '001',
  selectedProject: '000',
  user: Immutable.fromJS({
    image: null,
    name: 'User',
    surname: 'UserSurname',
    mail: 'test@mail.com',
    login: 'login',
    password: 'password'
  }),
  accountActivePage: 'Profile'
});

// REDUCER
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case uiActions.DATE_MONTH_CHANGED: {
      return state;
    }
    case uiActions.DAY_SELECTED: {
      return state;
    }
    case uiActions.PROJECT_SELECTED: {
      return state;
    }
    case uiActions.USER_SELECTED: {
      return state;
    }
    case uiActions.TITLE_PROJECT_CHANGED: {
      const selectedProject = state.get('selectedProject');
      return state.setIn(['projects', selectedProject , 'title'], payload);
    }
    case uiActions.CONTENT_PROJECT_CHANGED: {
      const selectedProject = state.get('selectedProject');
      return state.setIn(['projects', selectedProject , 'content'], payload);
    }
    case uiActions.COLOR_PROJECT_CHANGED: {
      const selectedProject = state.get('selectedProject');
      return state.setIn(['projects', selectedProject , 'color'], payload);
    }
    case uiActions.PROJECT_DELETED: {
      const selectedProject = state.get('selectedProject');
      return state.deleteIn(['projects', selectedProject]);
    }
    case uiActions.USER_NAME_CHANGED: {
      const selectedUser = state.get('selectedUser');
      return state.setIn(['users', selectedUser, 'name'], payload);
    }
    case uiActions.USER_PERCENT_CHANGED: {
      const selectedUser = state.get('selectedUser');
      return state.setIn(['users', selectedUser, 'percent'], payload);
    }
    case uiActions.USER_START_WORK_CHANGED: {
      const selectedUser = state.get('selectedUser');
      return state.setIn(['users', selectedUser, 'dates', 0, 'start'], payload);
    }
    case uiActions.USER_END_WORK_CHANGED: {
      const selectedUser = state.get('selectedUser');
      return state.setIn(['users', selectedUser, 'dates', 0, 'end'], payload);
    }
    case uiActions.USER_DELETED: {
      const selectedUser = state.get('selectedUser');
      return state.deleteIn(['users', selectedUser]);
    }
    case uiActions.SELECTED_PROJECT_CHANGED: {
      return state.set('selectedProject', payload);
    }
    case uiActions.SELECTED_USER_CHANGED: {
      return state.set('selectedUser', payload);
    }
    case uiActions.CURRENT_USER_CHANGE_AVATAR: {
      return state.setIn(['user', 'image'], payload);
    }
    case uiActions.CURRENT_USER_CHANGE_NAME: {
      return state.setIn(['user', 'name'], payload);
    }
    case uiActions.CURRENT_USER_CHANGE_SURNAME: {
      console.log(payload)
      return state.setIn(['user', 'surname'], payload);
    }
    case uiActions.CURRENT_USER_CHANGE_LOGIN: {
      return state.setIn(['user', 'login'], payload);
    }
    case uiActions.CURRENT_USER_CHANGE_MAIL: {
      return state.setIn(['user', 'mail'], payload);
    }
    case uiActions.CURRENT_USER_CHANGE_PASSWORD: {
      return state.setIn(['user', 'password'], payload);
    }
    case uiActions.ACCOUNT_PAGE_CHANGED: {
      return state.set('accountActivePage', payload);
    }
    default:
      return state;
  }
};
