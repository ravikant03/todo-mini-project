export const initialState = {
  todos: [],
};

export const methods = {
  addTodo: "ADD_TODO",
  deleteTodo: "DELETE_TODO",
};

const reducer = (state, action) => {
  switch (action.type) {
    case methods.addTodo:
      return { ...state, todos: [...state.todos, action.payload] };
    case methods.deleteTodo:
      return {
        ...state,
        todos: state.todos.filter((_, ind) => action.payload !== ind),
      };
    default:
      return state;
  }
};

export default reducer;
