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
      const updatedTasksAfterDelete = state.tasks.filter(
        (task) => task._id !== action.payload
      );
      return {
        ...state,
        tasks: updatedTasksAfterDelete,
      };
    case "EDIT":
      const updatedTasks = state.tasks.map((task) =>
        task._id === action.payload[0].id
          ? {
              ...task,
              title: action.payload[0].title,
              description: action.payload[0].description,
            }
          : task
      );
      return {
        ...state,
        tasks: updatedTasks,
      };
    case "LOGOUT":
      return {
        initialState,
      };
    default:
      return state;
  }
};

export default tasksReducer;
