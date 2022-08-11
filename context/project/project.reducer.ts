import { SET_PROJECT } from "./project.types";

export const initialProjectState: ProjectState | null = null;

export const projectReducer = (state: ProjectState, action: ProjectAction) => {
  switch (action.type) {
    case SET_PROJECT:
      return {
        ...state,
        project: action.payload,
      };
      break;

    default:
      break;
  }
};
