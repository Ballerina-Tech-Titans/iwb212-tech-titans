import React from 'react'
import '../..//css/Style.css';
import '../..//css/Help.css';
import faq from '../..//images/faqs.jpg';

function Help() {
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
                    <li><a href="/" >Home</a></li>
                        <li><a href="/Event">Event</a></li>
                        <li><a href="/Service">Services</a></li>
                        <li><a href="/Help" class="active">Help</a></li>
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

        <section id="mid">
            <h1 class="heading-style-1">Help Center</h1> 
            <div class="own">
                <h2 class="photographer">Gatherly : Event Reminder - FAQs</h2>
            </div>
            <img src={faq} class="au" />
            <div class="faq-square-container my-5 p-4">
                <div class="faq-item">
                    <h3>1. How do I add an event to the website?</h3>
                    <p>Answer: To add an event, simply click the "Add Event" button in the main menu. Fill out the event details in the provided form, including event name, date, location, description, and any other relevant information. Once you’ve filled out the form, click "Submit." Your event will be reviewed and listed on the website shortly after approval.</p>
                </div>
                <div class="faq-item">
                    <h3>2. How do I receive event reminders?</h3>
                    <p>Answer: Once you’re logged in, you can select the events you're interested in by visiting the event's page and clicking the "Set Reminder" button. You'll receive reminders via email or SMS notifications before the event starts, ensuring you never miss out on important details.</p>
                </div>
                <div class="faq-item">
                    <h3>3. What should I do if I forget my password?</h3>
                    <p>Answer: If you've forgotten your password, click the "Forgot Password" link on the login page. Enter your registered email, and we’ll send you instructions on how to reset your password. Follow the instructions in the email to create a new password and regain access to your account.</p>
                </div>
                <div class="faq-item">
                    <h3>4. How can I contact the event organizer?</h3>
                    <p>Answer: To contact an event organizer, navigate to the event's page and look for the "Contact Organizer" button. This will either provide you with their contact details or open a form where you can send them a direct message regarding any queries or concerns.</p>
                </div>
                <div class="faq-item">
                    <h3>5. What types of events can I add to the website?</h3>
                    <p>Answer: You can add a wide variety of events to the website, including conferences, workshops, webinars, social gatherings, concerts, and community events. Just make sure that the event complies with our community guidelines and fits within the categories provided during the submission process.</p>
                </div>
            </div>
            

    </section>
        <div class="support-section">
            <div class="support-container">

                <div class="support-card">
                    <div class="icon">
                        <i class="fas fa-phone"></i>
                    </div>
                    <h3>Call Us</h3>
                    <p>Mon–Fri from 8.00 am to 5.00 pm</p>
                    <p class="phone-numbers">037 456 7896<br/>077 569 4456</p>
                </div>

                <div class="support-card">
                    <div class="icon">
                        <i class="fas fa-headset"></i>
                    </div>
                    <h3>Give us Feedback</h3>
                    <form action="#">
                        <input type="email" placeholder="Email Address" required/>
                        <textarea placeholder="Enter Feedback Here" required></textarea>
                        <button type="submit" class="submit-btn">Send</button>
                    </form>
                </div>
            </div>
        </div>
    
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

export default Help
