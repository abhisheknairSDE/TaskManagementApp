import axios from "axios";
export const fetchTasks = ({ userId }) => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:5500/tasks/", {
        params: {
          createdBy: userId,
        },
      });
      if (response.statusText === "OK") {
        dispatch({ type: "FETCH", payload: response.data, reducer: "tasks" });
      }
    } catch (error) {
      console.error(error);
    }
  };
};

export const addTasks = ({ title, description, createdBy }) => {
    return async (dispatch) =>{
        try {
            const response = await axios.post('http://localhost:5500/tasks/add', {
                title,
                description,
                createdBy
            });
            if(response.status === 200){
                const newTask = { title, description, createdBy };
                dispatch({type: 'ADD', payload: [newTask], reducer: "tasks"});
            }
          } catch (err) {
            console.error(err);
          }
    }
}
