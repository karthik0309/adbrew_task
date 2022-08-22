import React, { useContext, useReducer} from "react";
import GlobalState from "./GlobalState";
import Reducer from "./Reducer";

const StateProvider=({ children })=>{
  let initialState = {
    todoList: [],
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <GlobalState.Provider value={{ state, dispatch }}>
          {children}
    </GlobalState.Provider>
  );
}


export const useGlobalStateValue = () => useContext(GlobalState);
export default StateProvider;