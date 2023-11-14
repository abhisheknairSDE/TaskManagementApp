import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addUser } from '../../actions/authActions';
import './Signup.css'; 
import Logo from '../../images/logo.png'

const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const isValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    setErrors({ ...errors, email: isValidEmail ? '' : 'Invalid email address' });
  };

  const validateName = (name) => {
    setErrors({ ...errors, name: name.trim() !== '' ? '' : 'Name is required' });
  };

  const validatePassword = (password) => {
    setErrors({
      ...errors,
      password: password.length >= 8 ? '' : 'Password must be at least 8 characters',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validateEmail(formData.email);
    validateName(formData.name);
    validatePassword(formData.password);

    if (Object.values(errors).every((error) => error === '')) {
      const user = {
        email: formData.email,
        name: formData.name,
        password: formData.password,
      }
      dispatch(addUser(user));
      navigate('/');
    }
  };

  return (
    <div className="container">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="form-section">
        <h1>Sign Up</h1>
        <form className="signupForm" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={() => validateEmail(formData.email)}
              required
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              onBlur={() => validateName(formData.name)}
              required
            />
            {errors.name && <div className="error">{errors.name}</div>}
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              onBlur={() => validatePassword(formData.password)}
              required
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          <div className="input-group">
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
      <div className="footer-text">
        <p>
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
