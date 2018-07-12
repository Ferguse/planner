import Immutable, { Map } from 'immutable';

// sources
import users from '../../source/users';
import projects from '../../source/projects';


// actions
import * as uiActions from './uiActions';

// INITIAL STATE
export const initialState = Map({
  users: Immutable.fromJS(users),
  projects: Immutable.fromJS(projects)
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
      return state;
    }
    case uiActions.CONTENT_PROJECT_CHANGED: {
      return state;
    }
    case uiActions.COLOR_PROJECT_CHANGED: {
      return state;
    }
    case uiActions.PROJECT_DELETED: {
      return state;
    }
    case uiActions.USER_NAME_CHANGED: {
      return state;
    }
    case uiActions.USER_PERCENT_CHANGED: {
      return state;
    }
    case uiActions.USER_START_WORK_CHANGED: {
      return state;
    }
    case uiActions.USER_END_WORK_CHANGED: {
      return state;
    }
    case uiActions.USER_DELETED: {
      return state;
    }

    default:
      return state;
  }
};
