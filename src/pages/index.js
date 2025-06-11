import React from 'react';

const Home = () => {
  return (
    <div>
      <header>
        <h1>AceIt</h1>
        <p>Your Monthly Productivity Tracker</p>
        <nav>
          <a href="index.html">Home</a>
          <a href="tracker.html">Tracker</a>
          <a href="about.html">About Us</a>
          <a href="contact.html">Contact Us</a>
        </nav>
      </header>

      <section className="welcome-section">
        <h2>Welcome to AceIt</h2>
        <p>
          Stay on track and crush your monthly goals with ease! <br />
          Organize your tasks by category, check progress daily, and celebrate consistency.<br />
          Ready to get started?
        </p>
        <a href="services.html" className="btn btn-primary start-btn">
          Go to Planner
        </a>
      </section>

      <footer>
        <p>&copy; 2025 AceIt &nbsp;|&nbsp; Stay productive!</p>
      </footer>
    </div>
  );
};

export default Home;

