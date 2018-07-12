export const DATE_MONTH_CHANGED = '@@ui/DATE_MONTH_CHANGED';
export const changeDateMonth = date => ({
  type: DATE_MONTH_CHANGED,
  payload: date
});

export const DAY_SELECTED = '@@ui/DAY_SELECTED';
export const selectedDay = date => ({
  type: DAY_SELECTED,
  payload: date
});

export const PROJECT_SELECTED = '@@ui/PROJECT_SELECTED';
export const selectProject = date => ({
  type: PROJECT_SELECTED,
  payload: date
});

export const USER_SELECTED = '@@ui/USER_SELECTED';
export const selectUser = date => ({
  type: USER_SELECTED,
  payload: date
});

// admin panel actions

export const TITLE_PROJECT_CHANGED = '@@ui/TITLE_PROJECT_CHANGED';
export const changeTitleProject = date => ({
  type: TITLE_PROJECT_CHANGED,
  payload: date
});

export const CONTENT_PROJECT_CHANGED = '@@ui/CONTENT_PROJECT_CHANGED';
export const changeContentProject = date => ({
  type: CONTENT_PROJECT_CHANGED,
  payload: date
});

export const COLOR_PROJECT_CHANGED = '@@ui/COLOR_PROJECT_CHANGED';
export const changeColorProject = date => ({
  type: COLOR_PROJECT_CHANGED,
  payload: date
});

export const PROJECT_DELETED = '@@ui/PROJECT_DELETED';
export const deleteProject = date => ({
  type: PROJECT_DELETED,
  payload: date
});

// users actions

export const USER_NAME_CHANGED = '@@ui/USER_NAME_CHANGED';
export const changeUserName = date => ({
  type: USER_NAME_CHANGED,
  payload: date
});

export const USER_PERCENT_CHANGED = '@@ui/USER_PERCENT_CHANGED';
export const changeUserPercent = date => ({
  type: USER_PERCENT_CHANGED,
  payload: date
});

export const USER_START_WORK_CHANGED = '@@ui/USER_START_WORK_CHANGED';
export const changeUserStartWork = date => ({
  type: USER_START_WORK_CHANGED,
  payload: date
});

export const USER_END_WORK_CHANGED = '@@ui/USER_END_WORK_CHANGED';
export const changeUserEndWork = date => ({
  type: USER_END_WORK_CHANGED,
  payload: date
});

export const USER_DELETED = '@@ui/USER_DELETED';
export const deleteUser = date => ({
  type: USER_DELETED,
  payload: date
});