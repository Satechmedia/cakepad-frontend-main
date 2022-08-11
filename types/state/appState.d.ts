interface AppState {
  projectsFilter?: "completed" | "active" | "paused" | "unlisted";
}

interface AppAction {
  type: "SET_PROJECTS_FILTER";
  payload: AppState["projectsFilter"];
}
