import { createContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";

export const RContext = createContext();

const TodoReducer = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <RContext.Provider value={{ state, dispatch }}>
      {children}
    </RContext.Provider>
  );
};

export default TodoReducer;
