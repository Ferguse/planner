import createImmutableSelector from 'create-immutable-selector';

export const uiSelector = state => state.get('ui');

export const projectsSelector = createImmutableSelector(uiSelector, ui => {
  return ui.get('projects');
});

