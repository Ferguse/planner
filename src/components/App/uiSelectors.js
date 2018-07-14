import createImmutableSelector from 'create-immutable-selector';

export const uiSelector = state => state.get('ui');

export const projectsSelector = createImmutableSelector(uiSelector, ui => {
  return ui.get('projects');
});

export const usersSelector = createImmutableSelector(uiSelector, ui => {
  return ui.get('users');
});

export const selectedProjectSelector = createImmutableSelector(uiSelector, ui => {
  return ui.get('selectedProject');
});

export const selectedUserSelector = createImmutableSelector(uiSelector, ui => {
  return ui.get('selectedUser');
});

