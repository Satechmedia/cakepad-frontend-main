interface ProjectState {
  project: Project;
}

interface ProjectAction {
  type: "SET_PROJECT";
  payload: ProjectState["project"];
}
