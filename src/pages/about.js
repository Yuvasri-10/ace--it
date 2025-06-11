import React from 'react';

const About = () => {
  return (
    <div>
      <header>
        <h1>AceIt</h1>
        <p>Your Monthly Productivity Tracker</p>
        <nav>
          <a href="index.html">Home</a>
          <a href="services.html">Planner</a>
          <a href="tracker.html">Tracker</a>
          <a href="about.html">About Us</a>
          <a href="contact.html">Contact Us</a>
        </nav>
      </header>

      <section className="about-section">
        <h2>About Us</h2>
        <p>
          AceIt was created to help you master your time, stay focused, and achieve your goals—one task at a time.<br /><br />
          Whether you’re a student, a working professional, or someone managing multiple roles, AceIt empowers you with simple,
          visual task planning by month and category.<br /><br />
          We believe in soft aesthetics, strong habits, and the joy of crossing things off your list.
        </p>
      </section>

      <footer>
        <p>&copy; 2025 AceIt &nbsp;|&nbsp; Stay productive!</p>
      </footer>
    </div>
  );
};

export default About;

