import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import { useSelector } from 'react-redux';

const HomePage = () => {
  // Assuming you have user information available in your state
  const userName = useSelector(state => state.auth.username); // Replace this with actual user name

  return (
    <div className="home-page">
      <header>
        <h1>Welcome to MyTaskBuddy!</h1>
        <p>Hi {userName}! Let's start getting your tasks set up.</p>
      </header>

      <section className="cta-section">
        <h2>What would you like to do?</h2>
        <div className="cta-buttons">
          <Link to="/create">
            <button>Create Tasks</button>
          </Link>
          <Link to="/tasks">
            <button>See Your Tasks</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
