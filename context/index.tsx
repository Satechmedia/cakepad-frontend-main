import React, { useReducer, useContext, createContext } from "react";
import combineReducers from "react-combine-reducers";

import { initialAppState, appReducer } from "./app";
import { initialAdminState, adminReducer } from "./admin";
import { initialProjectState, projectReducer } from "./project";

const [reducer, initialState] = combineReducers({
  appState: [appReducer, initialAppState],
  adminState: [adminReducer, initialAdminState],
  projectState: [projectReducer, initialProjectState],
});

const GlobalContext = createContext<ContextValues>([
  initialState,
  () => initialState,
]);

export const StateProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);
