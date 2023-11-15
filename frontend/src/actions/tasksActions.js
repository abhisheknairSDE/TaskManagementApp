import axios from "axios";

export const fetchTasks = ({ userId, token }) => {
  return async (dispatch) => {
    try {
      console.log('===== THIS IS INSIDE FETCH BEFORE API ====');
      const response = await axios.get("https://taskbuddy-nw4u.onrender.com/tasks/", {
        params: {
          createdBy: userId,
          token,
        },
      });
      if (response.statusText === "OK") {
        dispatch({ type: "FETCH", payload: response.data, reducer: "tasks" });
      }
    } catch (error) {
      console.log('ERROR in FETCH API');
      console.error(error);
    }
  };
};

export const addTasks = ({ title, description, createdBy }) => {
    return async (dispatch) =>{
        try {
            const response = await axios.post('https://taskbuddy-nw4u.onrender.com/tasks/add', {
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
      const response = await axios.put(`https://taskbuddy-nw4u.onrender.com/tasks/edit/${id}`, {
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
      const response = await axios.delete(`https://taskbuddy-nw4u.onrender.com/tasks/delete/${taskId}`);

      if (response.status === 200) {
        dispatch({ type: 'DELETE', payload: taskId, reducer: 'tasks' });
      }
    } catch (err) {
      console.error(err);
    }
  };
};
