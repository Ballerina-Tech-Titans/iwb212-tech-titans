import React, { useState } from 'react';
import '../..//css/Style.css';
import '../..//css/Popup.css';
import hackathon from '../..//images/hackathon.jpg';
import music_concert from '../..//images/music-concert.jpg';
import workshop_1 from '../..//images/workshop-1.jpg';
import charity from '../..//images/charity.jpg';
import art_exhibition from '../..//images/artexhibition.jpg';
import food_fest from '../..//images/food-fest.jpg';
import hackathon_2 from '../..//images/hackathon-2.jpg';
import conference from '../..//images/conference.jpg';

function Event() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

  const handleMoreInfoClick = (eventDetails) => {
    setPopupContent(eventDetails);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const addReminder = (eventDetails) => {
    // Get the current reminders from local storage
    let reminders = JSON.parse(localStorage.getItem("reminders")) || [];
  
    // Check if the reminder already exists
    const existingReminder = reminders.find((reminder) => reminder.title === eventDetails.title);
    
    if (!existingReminder) {
      // Add new event reminder
      reminders.push(eventDetails);
  
      // Save updated reminders back to local storage
      localStorage.setItem("reminders", JSON.stringify(reminders));
  
      alert(`${eventDetails.title} has been added to your reminders.`);
    } else {
      alert("This event is already in your reminders.");
    }
  };
  

  return (
    <div>
      <header className="header">
        <div className="nav-section">
          <div className="brand-and-navBtn">
            <a href="/">
              <span className="brand-name">Gatherly.</span>
            </a>
            <span className="navBtn flex">
              <i className="fas fa-bars"></i>
            </span>
          </div>

          <nav className="top-nav">
            <ul>
            <li><a href="/">Home</a></li>
                        <li><a href="/Event" class="active">Event</a></li>
                        <li><a href="/Service">Services</a></li>
                        <li><a href="/Help">Help</a></li>
                        <li><a href="/register">Join</a></li>
                        <li><a href="/User">Dashboard</a></li>
            </ul>
          </nav>
        </div>

        <div className="container about">
          <div className="about-content">
            <h2>G a t h e r l y .</h2>
            <h3>Event Reminder</h3>
            <blockquote>
              "Welcome to Gatherly, your ultimate event companion! Discover upcoming events, set personalized reminders, book tickets, and never miss a moment. Whether you're attending or organizing, Gatherly makes it easy to stay connected and in the loop. Join us and make every event unforgettable!"
            </blockquote>
          </div>
        </div>
      </header>

      <section className="section-four">
        <div className="container">
            <div className="blogs">
            <h2>Latest Events:</h2>
            <div className="blog-wrapper-sm">
                
                {/* Existing Blogs */}
                <div className="blog">
                <img src={hackathon} alt="" />
                <div className="blog-content">
                    <span className="badge">Hackathon</span>
                    <h3 className="blog-title">"Push Boundaries, Build Tomorrow."</h3>
                    <p className="blog-text">About the Hackathon: A 7-hour hackathon to code, create, win and Unleash Your Inner Coder!</p>
                    <button onClick={() => handleMoreInfoClick({ title: 'Hackathon', description: 'About the Hackathon: A 7-hour hackathon to code, create, win and Unleash Your Inner Coder!', date: '2023.01.07', venue: 'Green Valley Resort', time: '08:00 to 15:00' })} className="btn">More Info</button>
                </div>
                </div>

                <div className="blog">
                <img src={music_concert} alt="" />
                <div className="blog-content">
                    <span className="badge">Music Concert</span>
                    <h3 className="blog-title">"Vibes, Beats, and Unforgettable Nights!"</h3>
                    <p className="blog-text">Experience an unforgettable night of live music and electrifying performances!</p>
                    <button onClick={() => handleMoreInfoClick({ title: 'Music Concert', description: 'About the Concert: Experience an unforgettable night of live music and electrifying performances!', date: '2024.02.15', venue: 'City Auditorium', time: '18:00 to 23:00' })} className="btn">More Info</button>
                </div>
                </div>

                {/* New Blogs */}
                <div className="blog">
                <img src={hackathon_2} alt="" />
                <div className="blog-content">
                    <span className="badge">Tech Seminar</span>
                    <h3 className="blog-title">"Innovate Your Future!"</h3>
                    <p className="blog-text">About the Seminar: Join us for a day of inspiration, learning, and networking with industry leaders.</p>
                    <button onClick={() => handleMoreInfoClick({ title: 'Tech Seminar', description: 'Join us for a day of inspiration, learning, and networking with industry leaders.', date: '2024.03.10', venue: 'Tech Hub', time: '09:00 to 17:00' })} className="btn">More Info</button>
                </div>
                </div>

                <div className="blog">
                <img src={art_exhibition} alt="" />
                <div className="blog-content">
                    <span className="badge">Art Exhibition</span>
                    <h3 className="blog-title">"Expressions of Art!"</h3>
                    <p className="blog-text">About the Exhibition: Explore the world of creativity at our annual art exhibition featuring local artists.</p>
                    <button onClick={() => handleMoreInfoClick({ title: 'Art Exhibition', description: 'Explore the world of creativity at our annual art exhibition featuring local artists.', date: '2024.04.05', venue: 'Art Gallery', time: '10:00 to 18:00' })} className="btn">More Info</button>
                </div>
                </div>

                <div className="blog">
                <img src={food_fest} alt="" />
                <div className="blog-content">
                    <span className="badge">Food Festival</span>
                    <h3 className="blog-title">"Taste the World!"</h3>
                    <p className="blog-text">Join us for a culinary journey with food from around the globe!</p>
                    <button onClick={() => handleMoreInfoClick({ title: 'Food Festival', description: 'Join us for a culinary journey with food from around the globe!', date: '2024.05.20', venue: 'City Park', time: '12:00 to 20:00' })} className="btn">More Info</button>
                </div>
                </div>

                <div className="blog">
                <img src={conference} alt="" />
                <div className="blog-content">
                    <span className="badge">Conference</span>
                    <h3 className="blog-title">"Empower Your Knowledge!"</h3>
                    <p className="blog-text">Participate in various sports and games for all ages!</p>
                    <button onClick={() => handleMoreInfoClick({ title: 'Sports Day', description: 'Participate in various sports and games for all ages!', date: '2024.06.25', venue: 'Local Stadium', time: '08:00 to 16:00' })} className="btn">More Info</button>
                </div>
                </div>

                <div className="blog">
                <img src={workshop_1} alt="" />
                <div className="blog-content">
                    <span className="badge">Book Fair</span>
                    <h3 className="blog-title">"Discover New Worlds!"</h3>
                    <p className="blog-text">A haven for book lovers! Explore various genres and meet your favorite authors.</p>
                    <button onClick={() => handleMoreInfoClick({ title: 'Book Fair', description: 'Book Fair Details', date: '2024.07.30', venue: 'Convention Center', time: '09:00 to 18:00' })} className="btn">More Info</button>
                </div>
                </div>

                <div className="blog">
                <img src={charity} alt="" />
                <div className="blog-content">
                    <span className="badge">Charity</span>
                    <h3 className="blog-title">"Together for a Better Tomorrow!"</h3>
                    <p className="blog-text">Join us for a charity run to raise funds for those in need!</p>
                    <button onClick={() => handleMoreInfoClick({ title: 'Charity Run', description: 'Join us for a charity run to raise funds for those in need!', date: '2024.08.15', venue: 'City Sports Complex', time: '07:00 to 11:00' })} className="btn">More Info</button>
                </div>
                </div>

            </div>
            </div>
        </div>
    </section>


      {showPopup && (
         <div id="popup" className="popup" style={{ display: 'flex' }}>
         <div className="popup-content">
           <span className="close-btn" onClick={closePopup}>&times;</span>
           <div className="event-popup-container">
             <div className="event-popup-content">
               <header className="event-popup-header">
                 <h1 className="event-title">{popupContent?.title}</h1>
                 <div className="event-action-buttons">
                   <button 
                     className="event-button reminder-button" 
                     onClick={() => addReminder(popupContent)}
                   >
                     Add a Reminder
                   </button>
                   <button className="event-button favorites-button">Add to Favourites</button>
                 </div>
               </header>
     
               <div className="event-content">
                 <h3>Description</h3>
                 <p>{popupContent?.description}</p>
                 <h3>Event Overview</h3>
                 <p><strong>Date:</strong> {popupContent?.date}</p>
                 <p><strong>Venue:</strong> {popupContent?.venue}</p>
                 <p><strong>Time:</strong> {popupContent?.time}</p>
               </div>
             </div>
             <div class="reservation-container">
            <div class="reservation-header">
                <p class="reservation-title">Reserve Your Space</p>
            </div>
            
            <div class="ticket-cards-container">
                <div class="ticket-card">
                    <div class="ticket-details"></div>
                    <div class="ticket-button">
                        <button class="buy-tickets-button">Buy Tickets</button>
                    </div>
                </div>

                <div class="ticket-card">
                    <div class="ticket-details"></div>
                    <div class="ticket-button">
                        <button class="buy-tickets-button">Buy Tickets</button>
                    </div>
                </div>

                <div class="ticket-card">
                    <div class="ticket-details"></div>
                    <div class="ticket-button">
                        <button class="buy-tickets-button">Buy Tickets</button>
                    </div>
                </div>

                <div class="ticket-card">
                    <div class="ticket-details"></div>
                    <div class="ticket-button">
                        <button class="buy-tickets-button">Buy Tickets</button>
                    </div>
                </div>

                <div class="ticket-card">
                    <div class="ticket-details"></div>
                    <div class="ticket-button">
                        <button class="buy-tickets-button">Buy Tickets</button>
                    </div>
                </div>
            </div>
        </div>

           </div>


         </div>
       </div>
      )}

<footer class = "footer">
        <div class = "footer-container container">
            <div>
                <h2>Gatherly: Event Reminder</h2>
                <p>Gatherly: Your go-to event platform. Discover, book, and stay updated with events that matter. With personalized reminders and easy event management for organizers, Gatherly brings people together and ensures you never miss a moment.</p>
            </div>
            <div>
                <h3>S u b s c r i p t i o n !</h3>
                <p>"Stay updated on the events you love! Enter your email to receive personalized reminders and exclusive updates."</p>

                <div class = "subs">
                    <i class = "fas fa-envelope"></i>
                    <input type = "email" id = "email" placeholder="Email Address"/>
                    <button type = "submit">SUBSCRIBE</button>
                </div>
            </div>
        </div>
        <p> &copy; 2024 G a t h e r l y. | All rights reserved. </p>
    </footer>
    </div>
  );
}

export default Event;
