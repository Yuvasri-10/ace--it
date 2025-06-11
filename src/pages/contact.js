import React from 'react';
import Link from 'next/link';

const Contact = () => {
  return (
    <div>
      <header>
        <h1>AceIt</h1>
        <p>Your Monthly Productivity Tracker</p>
        <nav>
          <Link href="index.html">Home</Link>
          <Link href="services.html">Planner</Link>
          <Link href="tracker.html">Tracker</Link>
          <Link href="about.html">About Us</Link>
          <Link href="contact.html">Contact Us</Link>
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

