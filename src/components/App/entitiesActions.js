export const SOURCES_FETCH_REQUEST = '@@entities/SOURCES_FETCH_REQUEST';
export const SOURCES_FETCH_SUCCESS = '@@entities/SOURCES_FETCH_SUCCESS';
export const SOURCES_FETCH_FAILURE = '@@entities/SOURCES_FETCH_FAILURE';
export const fetchSources = () => ({ type: SOURCES_FETCH_REQUEST });

export const PROJECT_FETCH_REQUEST = '@@entities/PROJECT_FETCH_REQUEST';
export const PROJECT_FETCH_SUCCESS = '@@entities/PROJECT_FETCH_SUCCESS';
export const PROJECT_FETCH_FAILURE = '@@entities/PROJECT_FETCH_FAILURE';
export const fetchProject = () => ({ type: PROJECT_FETCH_REQUEST });

export const PROJECTS_FETCH_REQUEST = '@@entities/PROJECTS_FETCH_REQUEST';
export const PROJECTS_FETCH_SUCCESS = '@@entities/PROJECTS_FETCH_SUCCESS';
export const PROJECTS_FETCH_FAILURE = '@@entities/PROJECTS_FETCH_FAILURE';
export const fetchProjects = () => ({ type: PROJECTS_FETCH_REQUEST });

export const USERS_FETCH_REQUEST = '@@entities/USERS_FETCH_REQUEST';
export const USERS_FETCH_SUCCESS = '@@entities/USERS_FETCH_SUCCESS';
export const USERS_FETCH_FAILURE = '@@entities/USERS_FETCH_FAILURE';
export const fetchUsers = () => ({ type: USERS_FETCH_REQUEST });

export const USER_FETCH_REQUEST = '@@entities/USER_FETCH_REQUEST';
export const USER_FETCH_SUCCESS = '@@entities/USER_FETCH_SUCCESS';
export const USER_FETCH_FAILURE = '@@entities/USER_FETCH_FAILURE';
export const fetchUser = () => ({ type: USER_FETCH_REQUEST });

export const STAFFS_FETCH_REQUEST = '@@entities/STAFFS_FETCH_REQUEST';
export const STAFFS_FETCH_SUCCESS = '@@entities/STAFFS_FETCH_SUCCESS';
export const STAFFS_FETCH_FAILURE = '@@entities/STAFFS_FETCH_FAILURE';
export const fetchStaffs = () => ({ type: STAFFS_FETCH_REQUEST });

export const STAFF_FETCH_REQUEST = '@@entities/STAFF_FETCH_REQUEST';
export const STAFF_FETCH_SUCCESS = '@@entities/STAFF_FETCH_SUCCESS';
export const STAFF_FETCH_FAILURE = '@@entities/STAFF_FETCH_FAILURE';
export const fetchStaff = () => ({ type: STAFF_FETCH_REQUEST });

export const CREATE_PROJECT_REQUEST = '@@api/CREATE_PROJECT_REQUEST';
export const CREATE_PROJECT_SUCCESS = '@@api/CREATE_PROJECT_SUCCESS';
export const CREATE_PROJECT_FAILURE = '@@api/CREATE_PROJECT_FAILURE';
export const createProject = (data) => {
  return { type: CREATE_PROJECT_REQUEST, payload: data };
};

export const CREATE_USER_REQUEST = '@@api/CREATE_USER_REQUEST';
export const CREATE_USER_SUCCESS = '@@api/CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = '@@api/CREATE_USER_FAILURE';
export const createUser = (data) => {
  return ({ type: CREATE_USER_REQUEST, payload: data });
};
