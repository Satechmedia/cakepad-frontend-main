import { SET_PROJECTS_FILTER } from "./app.types";

export const initialAppState: AppState | null = {
  projectsFilter: "active"
};

export const appReducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    case SET_PROJECTS_FILTER:
      return {
        ...state,
        projectsFilter: action.payload,
      };
      break;

    default:
      break;
  }
};
