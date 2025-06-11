import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <header>
        <h1>AceIt</h1>
        <p>Your Monthly Productivity Tracker</p>
        <nav>
          <Link href="index.html">Home</Link>
          <Link href="tracker.html">Tracker</Link>
          <Link href="about.html">About Us</Link>
          <Link href="contact.html">Contact Us</Link>
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

