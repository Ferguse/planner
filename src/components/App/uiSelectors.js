import createImmutableSelector from 'create-immutable-selector';

export const uiSelector = state => state.get('ui');

export const projectsSelector = createImmutableSelector(uiSelector, ui => ui.get('projects'));

export const usersSelector = createImmutableSelector(uiSelector, ui => ui.get('users'));

export const selectedProjectSelector = createImmutableSelector(uiSelector, ui => ui.get('selectedProject'));

export const selectedUserSelector = createImmutableSelector(uiSelector, ui => ui.get('selectedUser'));

export const selectedCurrentUserSelector =
  createImmutableSelector(uiSelector, ui => ui.get('user'));

export const selectedAccountActivePageSelector =
  createImmutableSelector(uiSelector, ui => ui.get('accountActivePage'));

