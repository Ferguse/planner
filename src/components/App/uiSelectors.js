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

// settings
export const settingsNotificationSelector =
  createImmutableSelector(uiSelector, ui => ui.getIn(['settings', 'notification']));

export const settingsShortcutSelector =
  createImmutableSelector(uiSelector, ui => ui.getIn(['settings', 'shortcut']));

export const settingsStyleEnableSelector =
  createImmutableSelector(uiSelector, ui => ui.getIn(['settings', 'style']));

// modals
export const modalUserSelector =
  createImmutableSelector(uiSelector, ui => ui.get('selectedUsertModal'));

export const modalProjectSelector =
  createImmutableSelector(uiSelector, ui => ui.get('selectedProjectModal'));
