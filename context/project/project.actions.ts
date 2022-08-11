import { SET_PROJECT } from "./project.types";

export const setProject = (project: Project): ProjectAction => ({
  type: SET_PROJECT,
  payload: project,
});
