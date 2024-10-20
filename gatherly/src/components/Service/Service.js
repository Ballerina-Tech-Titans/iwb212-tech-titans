import React from 'react'
import '../..//css/Style.css';

function Service() {
  return (
    <div>
      <header class = "header">
        <div class = "nav-section">
          <div class = "brand-and-navBtn">
            <a href="/">
              <span class = "brand-name">
                Gatherly.
              </span>
            </a>
            <span class = "navBtn flex">
              <i class = "fas fa-bars"></i>
            </span>
          </div>

          <nav class = "top-nav">
            <ul>
            <li><a href="/">Home</a></li>
                        <li><a href="/Event">Event</a></li>
                        <li><a href="/Service" class="active">Services</a></li>
                        <li><a href="/Help">Help</a></li>
                        <li><a href="/register">Join</a></li>
                        <li><a href="/User">Dashboard</a></li>
            </ul>
          </nav>   
      </div>

      <div class = "container about">
        <div class = "about-content">      
          <h2> G  a  t  h  e  r  l  y . </h2>
            <h3>Event Reminder</h3>
              <blockquote>
                "Welcome to Gatherly, your ultimate event companion! Discover upcoming events, set personalized reminders, book tickets, and never miss a moment. Whether you're attending or organizing, Gatherly makes it easy to stay connected and in the loop. Join us and make every event unforgettable!"
              </blockquote>
        </div>
      </div>
    </header>

    <section class="section-four">
      <div class="container">
        <div class="blogs">
          <div class="blog-wrapper-sm">
            <div class="blog">
              <div class="blog-content">
                <span class="badge">Event Discovery</span>
                <h3 class="blog-title">
                  Event Discovery in Gatherly:
                </h3>
                <p class="blog-text">
                  Event discovery is a core feature of Gatherly that allows users to explore a wide variety of upcoming events tailored to their interests. Whether users are searching for concerts, workshops, festivals, or local gatherings, the platform makes finding events easy and personalized.<br/><br/>

                  In Gatherly, event discovery works through advanced filters and recommendations. Users can browse events by category, location, or date, making it convenient to find the perfect event based on their preferences. Additionally, Gatherly uses algorithms that track user interactions and interests to provide personalized event suggestions. This ensures that users are presented with events that align with their past choices, making event discovery more relevant and engaging.<br/><br/>

                  This feature transforms the way users connect with events, making it easy to stay updated and never miss an opportunity to attend something they love.
                </p>
              </div>
            </div>

            <div class="blog">
              <div class="blog-content">
                <span class="badge">Personalized Reminders</span>
                <h3 class="blog-title">
                  Personalized Reminders in Gatherly:
                </h3>
                <p class="blog-text">
                  Personalized reminders are a key feature of Gatherly designed to ensure users never miss important events. This feature allows users to set custom notifications for specific events they are interested in, whether it's a concert, workshop, or any local gathering.<br/><br/>

                  In Gatherly, personalized reminders work by letting users choose when and how they want to be notified about upcoming events. Once an event is added to their list, users can opt to receive notifications via email or in-app alerts, and they can customize the timing—whether they want reminders a week, a day, or just a few hours before the event starts. These reminders help users plan their schedules and stay informed without constantly checking the platform.<br/><br/>

                  By providing timely updates, personalized reminders enhance the user experience, ensuring no one forgets about their favorite events, making participation smooth and stress-free.
                </p>
              </div>
            </div>

            <div class="blog">
              <div class="blog-content">
                <span class="badge">Ticket Booking</span>
                <h3 class="blog-title">
                  Ticket Booking in Gatherly:
                </h3>
                <p class="blog-text">
                  Ticket booking is an essential feature in Gatherly, enabling users to seamlessly purchase tickets for their favorite events directly through the platform. Whether it's a concert, festival, or a conference, select, and secure their spot with just a few clicks.<br/><br/>

                  In Gatherly, ticket booking works by integrating with event organizers and ticket vendors, offering users an easy and secure way to buy tickets. Once users find an event they’re interested in, pricing, and seating arrangements. After choosing their preferred ticket, the platform facilitates the purchase process through a secure payment gateway. Users receive a digital ticket, which can be stored within the app or sent via email.<br/><br/>

                  This feature ensures a hassle-free experience, eliminating the need for lengthy processes. Gatherly’s ticket booking system helps users attend events smoothly, from discovery to securing their tickets in one place.
                </p>
              </div>
            </div>

            <div class="blog">
              <div class="blog-content">
                <span class="badge">Notifications & Updates</span>
                <h3 class="blog-title">
                  Notifications & Updates in Gatherly:
                </h3>
                <p class="blog-text">
                  Notifications and updates in Gatherly keep users informed about important changes to the events they are interested in. Whether it's event cancellations, time changes, or new announcements, this feature ensures that users are always up-to-date with real-time alerts.<br/><br/>

                  Gatherly's notification system works by delivering instant updates through push notifications, email alerts, or in-app messages, based on user preferences. Once a user shows interest in an event or purchases a ticket, they are automatically subscribed to receive relevant updates. Users can also customize their notification settings to control which types of alerts they want to receive—such as event changes, or reminders.<br/><br/>

                  This feature enhances the user experience by keeping participants informed and prepared, helping them stay organized and avoid missing any last-minute changes or new event opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

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
  )
}

export default Service
