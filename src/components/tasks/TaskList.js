import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {fetchTasks} from '../../actions/tasksActions';
import './TaskList.css'; 
import PaginationControl from '../../containers/PaginationControl';

const PAGE_SIZE = 5; // Number of tasks per pag

const TaskList = () => {
  const tasks = useSelector(state => state.tasks.tasks)
  const isLoggedIn = useSelector(state => state.auth.userIsLoggedIn)
  const userId = useSelector(state => state.auth.userId)
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  
  const editHandler = (id) => {
    console.log(id)
  } 

  const deleteHandler = (id) => {
    console.log(id)
  } 

  useEffect(() => {
    if(isLoggedIn){
      dispatch(fetchTasks({ userId }));
    }    
  }, [dispatch])

  const indexOfLastTask = currentPage * PAGE_SIZE;
  //const indexOfFirstTask = indexOfLastTask - PAGE_SIZE;
  const currentTasks =
    Array.isArray(tasks) && tasks.length > 0
      ? tasks.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)
      : [];

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
    {isLoggedIn ? <div className="task-list-wrapper"> 
      <h2>{tasks.length > 0 ? 'Task List': 'Add some tasks to see them here!'}</h2>
      <ul>
      {currentTasks.length > 0 && currentTasks.map((task) => (
          <li key={task._id} className="task-item">
            <div>
              <h4>{task.title}</h4>
              <p>{task.description}</p>
            </div>
            <button className="edit-button" onClick={() => editHandler(task._id)}>Edit</button>
            <button className="delete-button" onClick={() => deleteHandler(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <PaginationControl
        itemsPerPage={PAGE_SIZE}
        totalItems={tasks.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div> : <h2> Login or Singup to create tasks</h2>}
    </>
  );
};

export default TaskList;
