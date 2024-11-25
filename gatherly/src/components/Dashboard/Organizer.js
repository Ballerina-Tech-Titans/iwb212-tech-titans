import React, { useEffect, useState } from 'react';
import '../..//css/Organizer.css';
import propic from '../..//images/propic.jpg';
import food from '../..//images/food.jpg';
import musical from '../..//images/musical.jpg';
import holi from '../..//images/holi.jpg';
import bell from '../..//images/bell.png';
import logout1 from '../../images/logout.png';
import workshops from '../..//images/workshops.jpg';
import charity1 from '../..//images/charity1.jpg';
import OrganizerPopup from './OrganizerPopup.js';
import { Link } from 'react-router-dom';

function Organizer() {
    const [isOpenPopup, setIsOpenPopup] = useState(false);
    const openPopup = () => setIsOpenPopup(true);
    const closePopup = () => setIsOpenPopup(false);

    const [events, setEvents] = useState([]);

    useEffect(() => {
        async function fetchEvents() {
            try {
                const response = await fetch('http://localhost:8082/organizer');
                const data = await response.json();
                setEvents(data);  // Assuming data is an array of events
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        }
        fetchEvents();
    }, []);

    return (
        <div className='organizer'>
            <OrganizerPopup isOpen={isOpenPopup} isClose={closePopup}>
                <div>
                    <h3>Event Name:</h3>
                    <input type="text" placeholder="Enter event name" />
                    <h3>Event Date:</h3>
                    <input type="date" />
                    <button onClick={closePopup}>Add Event</button>
                </div>
            </OrganizerPopup>

            <div className="header-section">
                <h4>G a t h e r l y .</h4>
                <div className='header-profile111'></div>
                <a href="#" className="profile-bell">
                    <img src={bell} alt="Profile" />
                </a>
                <a href="#" className="profile">
                    <img src={propic} alt="Profile" />
                </a>
                <Link to='/organizer/login' className="profile-logout">
                    <img src={logout1} alt="Profile" />
                </Link>
            </div>

            <main>
                <div className="welcome-details">
                    <div>
                        <h1>Hello Marco, Welcome to Gatherly!</h1>
                        <h4>Event Organizer Dashboard</h4>
                    </div>
                    <div className="label-btn" >
                        <h3>Profit: LKR. 100,000</h3>
                        <button className='add-event-btn' onClick={openPopup}>+ Add New Event</button>
                    </div>
                </div>

                <div class="new-events">
                <h2>Added Events</h2>
                <div class="recent-event-cards">
                    <div class="card">
                        <div class="image">
                            <img src={food}/>
                        </div>
                        <div class="description">
                            <div class="title">
                                <h3>Food Fantasia</h3>
                                <h5 class="sub-title">Food Festival</h5>
                                <p>Added Yesterday</p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="image">
                            <img src={musical}/>
                        </div>
                        <div class="description">
                            <div class="title">
                                <h3>Midnight Beats Bash</h3>
                                <h5 class="sub-title">DJ Party</h5>
                                <p>Added October 12, 2024</p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="image">
                            <img src={holi}/>
                        </div>
                        <div class="description">
                            <div class="title">
                                <h3>Colors of Joy</h3>
                                <h5 class="sub-title">Holi Event</h5>
                                <p>Added October 05, 2024</p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="image">
                            <img src={workshops}/>
                        </div>
                        <div class="description">
                            <div class="title">
                                <h3>Innovate and Create</h3>
                                <h5 class="sub-title">Workshop</h5>
                                <p>Added October 02, 2024</p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="image">
                            <img src={charity1}/>
                        </div>
                        <div class="description">
                            <div class="title">
                                <h3>Hearts in Action</h3>
                                <h5 class="sub-title">Charity Event</h5>
                                <p>Added September 20, 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="new-events">
                    <h2>Newly Added Events</h2>
                    <div className="recent-event-cards">
                        {events.map(event => (
                            <div className="card" key={event.id}>
                                
                                <div className="description">
                                    <div className="title">
                                        <h3>{event.event_name}</h3>
                                        <h5 className="sub-title">{event.event_category}</h5>
                                        <p>Added {event.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            <div class="tickets-table">
                <div class="table-topic">
                    <h2>Tickets Issued:</h2>
                </div>
                <div class="table">
                    <table class="tickets-issued">
                        <tr>
                            <th>Event ID</th>
                            <th>Event Name</th>
                            <th>No. of Tickets Issued</th>
                            <th>No. of Tickets Sold</th>
                            <th>Net Profit</th>
                        </tr>
                        <tr>
                            <td>E0001</td>
                            <td>Food Fantasia</td>
                            <td>1000</td>
                            <td>630</td>
                            <td>LKR. 50,000</td>
                        </tr>
                        <tr>
                            <td>E0002</td>
                            <td>Bugbash - The hackathon</td>
                            <td>3000</td>
                            <td>3000</td>
                            <td>LKR. 300,000</td>
                        </tr>
                        <tr>
                            <td>E0003</td>
                            <td>Halloween Night</td>
                            <td>2000</td>
                            <td>1742</td>
                            <td>LKR. 65,750</td>
                        </tr>
                        <tr>
                            <td>E0004</td>
                            <td>Wicket Worriors</td>
                            <td>1500</td>
                            <td>1450</td>
                            <td>LKR. 40,000</td>
                        </tr>
                        <tr>
                            <td>E0005</td>
                            <td>Harmony Unplugged</td>
                            <td>5000</td>
                            <td>4960</td>
                            <td>LKR. 350,000</td>
                        </tr>
                    </table>
                </div>
            </div>

            </main>
        </div>
    );
}

export default Organizer;
