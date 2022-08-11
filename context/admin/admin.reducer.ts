import { SET_TOKEN, SET_PROFILE, SET_PROJECTS, SET_ADMIN_FILTER } from "./admin.types";

export const initialAdminState: AdminState | null = {
  adminFilter: "active",
};

export const adminReducer = (state: AdminState, action: AdminAction) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
      break;

    case SET_PROFILE: 
    return {
      ...state,
      profile: action.payload
    }

    case SET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
      break;

    case SET_ADMIN_FILTER:
      return {
        ...state,
        adminFilter: action.payload,
      };
      break;

    default:
      return {
        ...state,
      };
      break;
  }
};
