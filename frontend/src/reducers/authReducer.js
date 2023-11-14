const initialState = {
  userIsLoggedIn: false,
  username: null,
  userId: null,
  token: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        userIsLoggedIn: true,
        username: action.username,
        userId: action.userId,
        token: action.token
      };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
