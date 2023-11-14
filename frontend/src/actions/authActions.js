import axios from 'axios'

export const loginUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('https://taskbuddy-nw4u.onrender.com/user/login', userData);
      dispatch({ type: "LOGIN", username:response.data.username,userId: response.data.userId, token:response.data.token ,reducer: "auth" });
    } catch (error) {
      console.log(error);
    }
  };
};

 export const addUser = (userData) => {
  return async (dispatch) => {
    try{
      const response = await axios.post('https://taskbuddy-nw4u.onrender.com/user/add', userData);
      dispatch({ type: "LOGIN", username:response.data.username,userId: response.data.userId, token:response.data.token ,reducer: "auth" });
    }catch(error){
      console.log(error);
    }
  };
 }

  export const logoutUser = () => {
    return (dispatch) => {
      dispatch({type: 'LOGOUT', reducer: "auth"});
    } 
  };
  