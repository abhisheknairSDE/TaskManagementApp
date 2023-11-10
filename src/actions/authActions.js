import axios from 'axios'

export const loginUser = (userData) => {
  return async (dispatch) => {
    console.log(userData);
    try {
      // Make a POST request to your authentication endpoint
      const response = await axios.post('http://localhost:5500/user/login', userData);

      // Dispatch an action to update the Redux store upon successful authentication
      console.log(response);
      dispatch({ type: 'LOGIN', username:response.data.username,userId: response.data.userId });
    } catch (error) {
      // Dispatch an action for login failure if there's an error
      // You can define your own action type for login failure if needed
      console.log(error);
    }
  };
};

  
  export const logoutUser = () => {
    return (dispatch) => {
      dispatch({type: 'LOGOUT'})
    } 
  };
  