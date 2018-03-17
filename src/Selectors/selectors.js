import { createSelector } from 'reselect';
import numberShowWeek from "../source/numberShowWeek";

export const getUser = state => state.get('users');
export const getProject = state => state.get('projects');
export const getNumberShowWeek = state => state.get('numberShowWeek');

export const userSelector = createSelector(
  [getUser],
  (user) => {
    if (!user) {
      return;
    }
    return user;
  }
);

export const projectSelector = createSelector(
  [getProject],
  (projects) => {
    if (!projects) {
      return;
    }
    return projects;
  }
);

export const numberShowWeekSelector = createSelector(
  [getNumberShowWeek],
  (numberShowWeek) => {
    if (!numberShowWeek) {
      return;
    }
    return numberShowWeek;
  }
);
