import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editTasks } from "../../actions/tasksActions";
import "./EditTaskForm.css"; // Add your styling here

const EditTaskForm = ({ task, onClose }) => {
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedTask = {
      id: task._id,
      title: editedTitle,
      description: editedDescription,
    };
    dispatch(editTasks(updatedTask));
    onClose(); 
  };

  return (
    <div className="edit-form-wrapper">
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input"
          placeholder="Title"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
        <input
          type="text"
          className="form-textarea"
          placeholder="Description"
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
        />
        <div className="form-buttons">
          <button type="submit" className="submit-button">
            Save Changes
          </button>
          <button type="button" onClick={onClose} className="cancel-button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTaskForm;
