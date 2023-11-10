const initialState = {
  userIsLoggedIn: false,
  username: null,
  userId: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        userIsLoggedIn: true,
        username: action.username,
        userId: action.userId,
      };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
