import { Link, useNavigate } from 'react-router-dom'; // If you're using React Router
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../actions/authActions';
import './Navbar.css'

const Navbar = () => {
    const isLoggedIn = useSelector((state) => state.auth.userIsLoggedIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutHandler = () => {
      dispatch(logoutUser());
      navigate('/');
    }
  return (  
    <div className="navbar">
      <div className="navbar-left">
        <Link to='/'><h1>TaskBuddy</h1></Link>
      </div>
      <div className="navbar-right">
        {isLoggedIn ? (
          <>
          <Link to='/create'>Create Tasks</Link>
            <Link to="/tasks">See Tasks</Link>
            <button onClick={logoutHandler}>Logout</button>
          </>
        ) : (
          <Link to="login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
