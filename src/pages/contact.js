import React from 'react';

const Contact = () => {
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

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>
          Have questions, feedback, or suggestions? We’d love to hear from you!<br /><br />
          📧 Email: <a href="mailto:hello@aceittracker.com">hello@aceittracker.com</a><br /><br />
          🏢 Address:<br />
          AceIt Team<br />
          23 Focus Street,<br />
          Coimbatore, 641014
        </p>
      </section>

      <footer>
        <p>&copy; 2025 AceIt &nbsp;|&nbsp; Stay productive!</p>
      </footer>
    </div>
  );
};

export default Contact;

