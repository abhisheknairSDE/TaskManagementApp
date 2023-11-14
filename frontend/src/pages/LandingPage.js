import { Link } from 'react-router-dom';
import './LandingPage.css';
import createTasksImage from '../images/create-tasks.png';
import editTaskImage from '../images/edit-image.png';
import secureReliableImage from '../images/secure.png';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <h1>TaskBuddy</h1>
        <p>A simple and secure way to manage your tasks online.</p>
      </header>
      <section className="features">
        <div className="feature">
          <img src={createTasksImage} alt="Create Tasks" />
          <h2>Create Tasks</h2>
          <p>Easily create tasks and stay organized.</p>
        </div>
        <div className="feature">
          <img src={editTaskImage} alt="Edit and Delete" />
          <h2>Edit and Delete</h2>
          <p>Edit or delete tasks with just a click.</p>
        </div>
        <div className="feature">
          <img src={secureReliableImage} alt="Secure and Reliable" />
          <h2>Secure and Reliable</h2>
          <p>Your data is safe and stored securely online.</p>
        </div>
      </section>
      <section className="cta">
        <h2>Start Managing Your Tasks</h2>
        <p>Sign up now to enjoy a clutter-free task management experience.</p>
        <Link to='/signup'><button>Sign Up</button></Link>
      </section>
      <footer>
        <p>All tasks managed, none harmed. 🚀</p>
      </footer>
    </div>
  );
};

export default LandingPage;
