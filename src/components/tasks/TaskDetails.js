import React from 'react';
import './TaskDetails.css';

const TaskDetails = (props) => {
  return (
    <div className="task-details">
      <h2>Task Details</h2>
      <div>
        <h3>{props.task.title}</h3>
        <p>{props.task.description}</p>
      </div>
    </div>
  );
};

export default TaskDetails;