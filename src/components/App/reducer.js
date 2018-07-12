import { combineReducers } from 'redux-immutable';

import entitiesReducer from './entitiesReducer';
import uiReducer from './uiReduser';

const reducer = combineReducers({
  entities: entitiesReducer,
  ui: uiReducer
});

export default reducer;
