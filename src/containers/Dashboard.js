import { useState } from "react";
import TaskForm from "../components/tasks/TaskForm";
import TaskList from "../components/tasks/TaskList";
import './Dashboard.css'

const dummyData = [
  {
    id: "1",
    title: "Title1",
    description: "Desc1",
  },
  {
    id: "2",
    title: "Title2",
    description: "Desc2",
  },
];

const Dashboard = (props) => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleTaskSubmit = () => {
    console.log("Submitted");
  };

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
      <div className="task-form">
        <TaskForm onTaskSubmit={handleTaskSubmit} />
      </div>
      <div className="task-list">
        <TaskList tasks={dummyData} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default Dashboard;
