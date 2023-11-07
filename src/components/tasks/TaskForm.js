import { useState } from "react";
import "./TaskForm.css";

const TaskForm = (props) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDesciption, setInputDesciption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: new Date().getTime().toString(),
      name: inputTitle,
      desc: inputDesciption,
    };
    props.onTaskSubmit(newTask);
    setInputTitle("");
    setInputDesciption("");
  };

  return (
    <div className="form-wrapper">
      <h2>Create Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input"
          placeholder="Title"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <textarea
          className="form-textarea"
          placeholder="Description"
          value={inputDesciption}
          onChange={(e) => setInputDesciption(e.target.value)}
        />
        <button type="submit" className="submit-button">
          Create Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
