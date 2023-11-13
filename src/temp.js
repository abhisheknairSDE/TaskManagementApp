import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {fetchTasks} from '../../actions/tasksActions';
import './TaskList.css'; 
import PaginationControl from '../../containers/PaginationControl';

const TaskList = (props) => {
  const tasks = useSelector(state => state.tasks.tasks)
  const isLoggedIn = useSelector(state => state.auth.userIsLoggedIn)
  const userId = useSelector(state => state.auth.userId)
  const [displayedTasks, setDisplayedTasks] = useState([]);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if(isLoggedIn){
      dispatch(fetchTasks({ userId }));
    }
    setDisplayedTasks(tasks);    
  }, [dispatch])

  const itemsPerPage = 5;
  const totalPages = Math.ceil(displayedTasks.length / itemsPerPage) ;

  // const handlePageChange = (newPage) => {
  //   if (newPage >= 1 && newPage <= totalPages) {
  //     //setCurrentPage(newPage);
  //   }
  // };

  return (
    <div className="task-list-wrapper"> 
      <h2>{tasks.length > 0 ? 'Task List': 'Add some tasks to see them here!'}</h2>
      <ul>
      {tasks.length > 0 && tasks.map((task) => (
          <li key={task._id} className="task-item">
            <div>
              <h4>{task.title}</h4>
              <p>{task.description}</p>
            </div>
            <button className="edit-button" onClick={() => props.onEdit(task.id)}>Edit</button>
            <button className="delete-button" onClick={() => props.onDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {displayedTasks.length > itemsPerPage && <PaginationControl totalPages={totalPages}/>}
    </div>
  );
};

export default TaskList;
