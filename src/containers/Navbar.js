import { Link } from 'react-router-dom'; // If you're using React Router
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../actions/authActions';
import './Navbar.css'

const Navbar = () => {
    const isLoggedIn = useSelector((state) => state.auth.userIsLoggedIn);
    const dispatch = useDispatch();
    const logoutHandler = () => {
      dispatch(logoutUser());
    }
  return (
    <div className="navbar">
      <div className="navbar-left">
        <span>App Name</span>
      </div>
      <div className="navbar-right">
        {isLoggedIn ? (
          <>
            <Link to="/tasks">See Tasks</Link>
            <button onClick={logoutHandler}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
