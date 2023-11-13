const initialState = {
  tasks: [],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH":
      return {
        ...state,
        tasks: [...action.payload],
      };
    case "ADD":
      return {
        ...state,
        tasks: [...state.tasks, ...action.payload],
      };
    case "DELETE":
        return {
            ...state,
            tasks: state.tasks.filter((task) => task.id !== action.payload),
        };
    case "EDIT":
        return {
            ...state,
            tasks: state.tasks.map((task) => task.id === action.payload.id ? action.payload : task),
        };
    case "LOGOUT":
      return{
        initialState
      }
    default:
      return state;
  }
};

export default tasksReducer;
