import axios from "axios";
// Fetching tasks disptach function
export const fetchTasks = ({userId}) => {
    return async (dispatch) => {
      try {
        const response = await axios.get("http://localhost:5500/tasks/", {
            params: {
            createdBy: userId,
          },
        });
        dispatch({ type: "ADD", payload: response.data, reducer: "tasksReducer" });
      } catch (error) {
        console.error(error);
      }
    };
  };
