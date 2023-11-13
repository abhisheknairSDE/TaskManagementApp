import { useState } from "react";
import "./TaskForm.css";
import { useDispatch, useSelector } from "react-redux";
import { addTasks } from "../../actions/tasksActions";

const TaskForm = () => {

  const [inputTitle, setInputTitle] = useState("");
  const [inputDesciption, setInputDesciption] = useState("");
  const createdBy = useSelector(state => state.auth.userId);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.userIsLoggedIn)

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title: inputTitle,
      description: inputDesciption,
      createdBy: createdBy,
    };
    dispatch(addTasks(newTask))
    setInputTitle("");
    setInputDesciption("");
  };

  return (
    <>
    {isLoggedIn ? <div className="form-wrapper">
      <h2>Create Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input"
          placeholder="Title"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <input
          type="text"
          className="form-textarea"
          placeholder="Description"
          value={inputDesciption}
          onChange={(e) => setInputDesciption(e.target.value)}
        />
        <button type="submit" className="submit-button">
          Create Task
        </button>
      </form>
    </div> : <h2> Login or Singup to create tasks</h2>}
    </>
  );
};

export default TaskForm;
