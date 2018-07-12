import createImmutableSelector from 'create-immutable-selector';
import { List } from 'immutable';

export const uiSelector = state => state.get('ui');

export const projectsSelector = createImmutableSelector(uiSelector, ui => {
  return ui.get('projects');
});

