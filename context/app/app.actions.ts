import { SET_PROJECTS_FILTER } from "./app.types";

export const setProjectsFilter = (filter: AppState["projectsFilter"]): AppAction => ({
  type: SET_PROJECTS_FILTER,
  payload: filter,
});
