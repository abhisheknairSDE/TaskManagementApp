import './TaskList.css'; 

const TaskList = (props) => {
  return (
    <div className="task-list-wrapper"> 
      <h2>Task List</h2>
      <ul>
      {props.tasks.map((task) => (
          <li key={task.id} className="task-item">
            <div>
              <h4>{task.title}</h4>
              <p>{task.description}</p>
            </div>
            <button onClick={() => props.onEdit(task.id)}>Edit</button>
            <button onClick={() => props.onDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
