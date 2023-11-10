import { useState } from "react";
import { useSelector } from "react-redux";
import TaskForm from "../components/tasks/TaskForm";
import TaskList from "../components/tasks/TaskList";
import './Dashboard.css'
import Login from "../components/authenticaton/Login";

const Dashboard = (props) => {
  const isLoggedIn = useSelector(state => state.auth.userIsLoggedIn);
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleEdit = (id, updatedTask) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task
      );
    });
    setSelectedTask(null);
  };

  const handleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    setSelectedTask(null);
  };

  return (
    <div className="dashboard-container">
      {!isLoggedIn && <Login />}
      {isLoggedIn && <div className="task-form">
        <TaskForm />
      </div>}
      {isLoggedIn && <div className="task-list">
        <TaskList onEdit={handleEdit} onDelete={handleDelete} />
      </div>}
    </div>
  );
};

export default Dashboard;
