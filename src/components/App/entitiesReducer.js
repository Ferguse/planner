import { fromJS } from 'immutable';

// entities types
import {
  SOURCES_FETCH_SUCCESS,
  USER_FETCH_SUCCESS,
  USERS_FETCH_SUCCESS,
  STAFF_FETCH_SUCCESS,
  STAFFS_FETCH_SUCCESS,
  PROJECT_FETCH_SUCCESS,
  PROJECTS_FETCH_SUCCESS
} from './entitiesActions';

export const initialState = fromJS({
  projects: {},
  project: {},
  users: {},
  user: {},
  staffs: {},
  staff: {}
});

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SOURCES_FETCH_SUCCESS: {
      const sources = payload;
      return state.set('sources', sources);
    }
    case USERS_FETCH_SUCCESS: {
      const users = payload;
      return state.set('users', users);
    }
    case USER_FETCH_SUCCESS: {
      const user = payload;
      return state.set('user', user);
    }
    case STAFFS_FETCH_SUCCESS: {
      const staffs = payload;
      return state.set('staffs', staffs);
    }
    case STAFF_FETCH_SUCCESS: {
      const staff = payload;
      return state.set('staff', staff);
    }
    case PROJECTS_FETCH_SUCCESS: {
      const projects = payload;
      return state.set('projects', projects);
    }
    case PROJECT_FETCH_SUCCESS: {
      const project = payload;
      return state.set('project', project);
    }
    default:
      return state;
  }
};

export default reducer;
