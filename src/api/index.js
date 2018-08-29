/* eslint-disable no-use-before-define */

import { fetchJSON, postJSON } from '../utils';
import urls from '../config/urls';

export const fetchStaffs = () =>
  fetchJSON(urls.staffs).then(staffs => staffs, {});

export const fetchStaff = () =>
  fetchJSON(urls.staff).then(staff => staff, {});

export const fetchUsers = () =>
  fetchJSON(urls.users).then(users => users, {});

export const fetchUser = () =>
  fetchJSON(urls.user).then(staffs => staffs, {});

export const fetchProjects = () =>
  fetchJSON(urls.projects).then(projects => projects, {});

export const fetchProject = () =>
  fetchJSON(urls.project).then(project => project, {});

export const createUser = (body) => {
  postJSON(urls.users, body);
}

export const createProject = (body) =>
  postJSON(urls.projects, body);
