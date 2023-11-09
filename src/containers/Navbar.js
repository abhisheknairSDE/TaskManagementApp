import { Link } from 'react-router-dom'; // If you're using React Router
import { useSelector, useDispatch } from 'react-redux'
import './Navbar.css'

const Navbar = ({ user, onLogout }) => {
    const user1 = useSelector((state) => state.user);
  return (
    <div className="navbar">
      <div className="navbar-left">
        <span>App Name</span>
      </div>
      <div className="navbar-right">
        {user1 ? (
          <>
            <Link to="/tasks">See Tasks</Link>
            <button onClick={onLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
