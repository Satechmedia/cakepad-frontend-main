interface GlobalState {
  adminState: AdminState;
  projectState: ProjectState;
  appState: AppState;
}

type DispatchAction = ProjectAction | AdminAction | AppAction;
type ContextValues = [GlobalState, React.Dispatch<DispatchAction>];
