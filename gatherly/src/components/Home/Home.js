import React from 'react'
import '../../css/Style.css';
import own from '../..//images/own.jpg';
import artexhibition from '../..//images/artexhibition.jpg';
import gamingevent from '../..//images/gamingevent.jpg';
import conference from '../..//images/conference.jpg';
import photographyworkshop from '../..//images/photography-workshop.jpg';
import eventdiscovery from '../..//images/event_discovery.jpg';
import work from '../..//images/work.jpg';
import owns from '../..//images/owns.jpg';
import about from '../..//images/about.jpg';
import { Link } from 'react-router-dom';



function Home() {
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

              
                <nav class="top-nav">
                    <ul>
                        <li><a href="/" class="active">Home</a></li>
                        <li><a href="/Event">Event</a></li>
                        <li><a href="/Service">Services</a></li>
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
                        <Link to='/organizer/register'><button className='organizer-btn'>Be a Organizer</button></Link>
                        <blockquote>
                            "Welcome to Gatherly, your ultimate event companion! Discover upcoming events, set personalized reminders, book tickets, and never miss a moment. Whether you're attending or organizing, Gatherly makes it easy to stay connected and in the loop. Join us and make every event unforgettable!"
                        </blockquote>
                    
                </div>
            </div>
        </header>
       

        <section class = "section-one">
            <div class = "container">
                <div class = "sec-one-left">
                    {/* <img src={own} alt="" /> */}
                    <div>
                      <img src={about} alt="" />
                        <h3>G a t h e r l y</h3>
                        <p>"Welcome to Gatherly, your ultimate event companion! Whether you're an avid event-goer or a passionate organizer, Gatherly is designed to bring people together effortlessly. Discover a wide array of upcoming events—from concerts and festivals to workshops and local gatherings—tailored to your interests. Set personalized reminders so you never miss out, and book tickets with ease, all in one place.
                        <br/><br/>
                        For event organizers, Gatherly offers a seamless platform to showcase your events and reach a broader audience. Easily add your event details, promote them, and watch your community grow. Whether you're planning a small meetup or a major festival, Gatherly is here to support you every step of the way.
                        <br/><br/>
                        Join us today and transform how you experience and organize events—because at Gatherly, we believe every moment deserves to be celebrated!"</p>
                    </div>
                </div>

                <div class = "sec-one-right">
                    <div class = "work-content">
                        <h3>G a t h e r l y : Services</h3>
                        <p>
                            &#x2022; Event Discovery – Browse and search for upcoming events by category, location, or date. <br/><br/>
                            &#x2022; Personalized Reminders – Set and receive reminders for events you’re interested in to avoid missing them.<br/><br/>
                            &#x2022; Ticket Booking – Purchase tickets directly through the platform for various events.<br/><br/>
                            &#x2022; Event Listings for Organizers – Allow event organizers to create, promote, and manage their events.<br/><br/>
                            &#x2022; Notifications and Updates – Get real-time updates about event changes, cancellations, or announcements.<br/><br/>
                            &#x2022; Event Recommendations – Receive suggestions based on your interests, past bookings, or popular trends.<br/><br/>
                        </p>
                        <a href = "service.html" class = "btn">More info..</a>
                    </div>
                    <div class = "work-imgs">
                        <div class = "work-img-1">
                            <img src={eventdiscovery} alt=""/>
                        </div>
                        <div class = "work-img-2">
                          <img src={work} alt="" />
                        </div>
                    </div>
                    <h4>"Stay connected, discover events, and never miss a moment!"</h4>
                </div>
            </div>
        </section>

        <section class="section-five">
            <div class = "container">
                <div class = "blogs">
                    <h2>Events in this Month:</h2>
                    <div class = "blog-wrapper-sm">
                        <div class = "blog">
                          <img src={artexhibition} alt="" />
                            <div class = "blog-content">
                                <span class = "badge">Exhibition (Art)</span>
                                
                                <h3 class = "blog-title">
                                    "Where Creativity Meets Passion!"
                                </h3>
                                <p class = "blog-text">
                                    About the Exhibition:<br/>
                                    Discover amazing art from talented artists across various styles!
                                </p>
                                <a href = "" class = "btn">More Info</a>
                            </div>
                        </div>
                       
                        <div class = "blog">
                          <img src={gamingevent} alt="" />
                            <div class = "blog-content">
                                <span class = "badge">Sports</span>
                                
                                <h3 class = "blog-title">
                                    "Unleash the Champion Within!, Game On!"
                                </h3>
                                <p class = "blog-text">
                                About the Gaming Event:<br/>
                                Gear up for an electrifying gaming event where skill, strategy, and speed collide!
                                </p>
                                <a href = "" class = "btn">More Info</a>
                            </div>
                        </div>
                       
                        <div class = "blog">
                          <img src={conference} alt="" />
                            <div class = "blog-content">
                                <span class = "badge">Conference</span>
                                
                                <h3 class = "blog-title">
                                    "Transform Ideas into Action!"
                                </h3>
                                <p class = "blog-text">
                                About the Conference:<br/>
                                Join industry leaders for insightful discussions and networking opportunities!
                                </p>
                                <a href = "" class = "btn">More Info</a>
                            </div>
                        </div>

                        <div class = "blog">
                          <img src={photographyworkshop} alt="" />
                            <div class = "blog-content">
                                <span class = "badge">Workshop</span>
                                
                                <h3 class = "blog-title">
                                    "Capture Moments, Master Your Lens."
                                </h3>
                                <p class = "blog-text">
                                About the Workshop:<br/>
                                    Enhance your skills in this hands-on workshop with industry experts!
                                </p>
                                <a href = "" class = "btn">More Info</a>
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
                          <input type="email" placeholder='Email Address' id="email" />
                        <button type = "submit">SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <p> &copy; 2024 G a t h e r l y. | All rights reserved. </p>
        </footer>
    </div>
  )
}

export default Home
