import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from 'react-redux';
import Login from "./components/authenticaton/Login";
import TaskList from "./components/tasks/TaskList";
import TaskForm from './components/tasks/TaskForm';
import Root from "./pages/Root";
import Signup from "./components/authenticaton/Signup";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.userIsLoggedIn);
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: isLoggedIn ? <HomePage /> : <LandingPage /> },
        { path: "/login", element: <Login /> },
        { path: "/tasks", element: <TaskList /> },
        { path: "/signup", element: <Signup />},
        { path: "/create", element: <TaskForm />},
      ],
    },
  ]); 

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
