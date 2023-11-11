import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/authenticaton/Login";
import TaskList from "./components/tasks/TaskList";
import TaskForm from './components/tasks/TaskForm';
import Root from "./pages/Root";
import Signup from "./components/authenticaton/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/tasks", element: <TaskList /> },
      { path: "/signup", element: <Signup />},
      { path: "/create", element: <TaskForm />}
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
