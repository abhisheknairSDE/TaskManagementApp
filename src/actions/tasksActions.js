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
};

export const editTasks = ({ id, title, description }) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`http://localhost:5500/tasks/edit/${id}`, {
        title,
        description,
      });

      if (response.status === 200) {
        const editedTask = { id, title, description };
        dispatch({ type: 'EDIT', payload: [editedTask], reducer: 'tasks' });
      }
    } catch (err) { 
      console.error(err);
    }
  };
};

export const deleteTasks = (taskId) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`http://localhost:5500/tasks/delete/${taskId}`);

      if (response.status === 200) {
        dispatch({ type: 'DELETE', payload: taskId, reducer: 'tasks' });
      }
    } catch (err) {
      console.error(err);
    }
  };
};
