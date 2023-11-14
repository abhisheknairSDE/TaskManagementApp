import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import createTasksImage from '../images/create-tasks.png';
import taskListImage from '../images/task-list.png';
import './HomePage.css';

const HomePage = () => {
  const userName = useSelector(state => state.auth.username); 

  return (
    <div className="home-page">
      <header>
        <h1>Welcome to TaskBuddy!</h1>
        <p>Hi {userName}! Let's start getting your tasks set up.</p>
      </header>

      <section className="cta-section">
        <h2>What would you like to do?</h2>
        <div className="image-section">
          <img src={createTasksImage} alt="Icon 1" />
          <img src={taskListImage} alt="Icon 2" />
        </div>
        <div className="cta-buttons">
          <Link to="/create">
            <button>Create Tasks</button>
          </Link>
          <Link to="/tasks">
            <button>See Your Tasks</button>
          </Link>
        </div>
      </section>
      <footer>
        <p>All tasks managed, none harmed. 🚀</p>
      </footer>
    </div>
  );
};

export default HomePage;
