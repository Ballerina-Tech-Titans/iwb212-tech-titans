import React, { useEffect, useState } from 'react'
import '../..//css/Style.css';
import '../..//css/User.css';
import '../..//js/User.js';
// import hackathon5 from '../..//images/hackathon5.jpg';
// import music5 from '../..//images/music5.jpg';
// import music11 from '../..//images/music11.jpg';
// import haloween5 from '../..//images/halloween5.jpg';
// import camera5 from '../..//images/camera5.jpg';
// import cricket5 from '../..//images/cricket5.jpg';
// import gaming5 from '../..//images/gaming5.jpg';
// import art5 from '../..//images/art5.jpg';

function User() {
	const [reminders, setReminders] = useState([]);

  // Fetch reminders from local storage when the component loads
  useEffect(() => {
    const storedReminders = JSON.parse(localStorage.getItem("reminders")) || [];
    setReminders(storedReminders);
  }, []);

  return (
    <div>
      <header class="user-header">
        <div class="nav-section">
            <div class="brand-and-navBtn">
                <a href="/">
                    <span class="brand-name">
                        Gatherly.
                    </span>
                </a>
                <span class="navBtn flex">
                    <i class="fas fa-bars"></i>
                </span>
            </div>

            <nav class="top-nav">
                <ul>
				<li><a href="/">Home</a></li>
                        <li><a href="/Event">Event</a></li>
                        <li><a href="/Service">Services</a></li>
                        <li><a href="/Help">Help</a></li>
                        <li><a href="/register">Join</a></li>
                        <li><a href="/User" class="active">Dashboard</a></li>
                </ul>
            </nav>
        </div>
    </header>
      <section id="content">
        <main>
          <div className="head-title">
            <h1>Hi, User! Welcome to Gatherly!</h1>
            <h2 className="dashboard-topic2">Favorites and Reminders</h2>

            {/* Display reminders */}
            <div className="table-data">
              <div className="order">
                <h3>Your Reminders</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Event</th>
                      <th>Date</th>
                      <th>Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reminders.map((reminder, index) => (
                      <tr key={index}>
                        <td>{reminder.title}</td>
                        <td>{reminder.date}</td>
                        <td>{reminder.category || "General"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  )
}

export default User
