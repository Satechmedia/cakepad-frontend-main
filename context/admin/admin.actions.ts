import { SET_TOKEN, SET_PROJECTS, SET_ADMIN_FILTER } from "./admin.types";

export const setToken = (token: AdminState['token']): AdminAction => ({
  type: SET_TOKEN,
  payload: token,
});

export const setProjects = (projects: Project[]): AdminAction => ({
  type: SET_PROJECTS,
  payload: projects,
});

export const setAdminFilter = (filter: AdminState['adminFilter']): AdminAction => ({
  type: SET_ADMIN_FILTER,
  payload: filter,
});