import { fromJS } from 'immutable';

// entities types
import { SOURCES_FETCH_SUCCESS } from './entitiesActions';

export const initialState = fromJS({
  projects: {},
  users: {},
  user: {}
});

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SOURCES_FETCH_SUCCESS: {
      const sources = payload;
      return state.set('sources', sources);
    }
    default:
      return state;
  }
};

export default reducer;
