import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks, deleteTasks } from "../../actions/tasksActions";
import PaginationControl from "../../containers/PaginationControl";
import EditTaskForm from "./EditTaskFrom";
import "./TaskList.css";

const PAGE_SIZE = 5;

const getFilteredRows = (rows, filteredString) => {
  return rows.filter((row) =>
    Object.values(row).some((s) =>
      String(s).toLowerCase().includes(filteredString.toLowerCase()),
    ),
  );
};

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks) ?? [];
  const token = useSelector((state) => state.auth.token);
  const isLoggedIn = useSelector((state) => state.auth.userIsLoggedIn);
  const userId = useSelector((state) => state.auth.userId);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const [editingTask, setEditingTask] = useState(null);
  const [editFormVisible, setEditFormVisible] = useState(false);

  const [inputFieldValue, setInputFieldValue] = useState('');

  const editHandler = (task) => {
    setEditingTask(task);
    setEditFormVisible(true);
  };

  const deleteHandler = (id) => {
    dispatch(deleteTasks(id));
  };

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchTasks({ userId, token }));
    }
  }, [dispatch, userId, isLoggedIn, token]);

  const indexOfLastTask = currentPage * PAGE_SIZE;
  const indexOfFirstTask = indexOfLastTask - PAGE_SIZE;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {isLoggedIn ? (
        <div className="task-list-wrapper">
          <h2>
            {tasks.length > 0
              ? "Task List"
              : "Add some tasks to see them here!"}
          </h2>
          <input className='filterbox' value={inputFieldValue} onChange={(e) => setInputFieldValue(e.target.value)}/>
          <ul>
            {editFormVisible && (
              <EditTaskForm
                task={editingTask}
                setEditFormVisible={setEditFormVisible}
                onClose={() => {
                  setEditFormVisible(false);
                  setEditingTask(null);
                }}
              />
            )}
            {currentTasks.length > 0 &&
              getFilteredRows(currentTasks, inputFieldValue).map((task) => (
                <li key={task._id} className="task-item">
                  <div>
                    <h4>{task.title}</h4>
                    <p>{task.description}</p>
                  </div>
                  <button
                    className="edit-button"
                    onClick={() => editHandler(task)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => deleteHandler(task._id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
          </ul>
          <PaginationControl
            itemsPerPage={PAGE_SIZE}
            totalItems={tasks.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      ) : (
        <h2> Login or Singup to create tasks</h2>
      )}
    </>
  );
};

export default TaskList;
