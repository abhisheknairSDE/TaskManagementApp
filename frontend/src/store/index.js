import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';
import tasksReducer from '../reducers/tasksReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  tasks: tasksReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
