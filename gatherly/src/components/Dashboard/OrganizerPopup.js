import React, { useState } from 'react';
import '../../css/organizerpopup.css';

function OrganizerPopup({ isOpen, isClose }) {
    const [formData, setFormData] = useState({
        event_name: '',
        event_description: '',
        date: '',
        event_category: '',
        ticket: '',
        organizer_name: '',
        contact_no: '',
        email: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8082/organizer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                alert('Event added successfully!');
            } else {
                alert('Failed to add event.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
        isClose();  // Close popup on submit
    };

    if (!isOpen) return null;

    return (
        <div className='organizer-popup-overlay'>
            <div className='organizer-popup'>
                <div className='organizer-popup-header'>
                    <span className='organizer-popup-title'>Add a New Event</span>
                    <button className='organizer-popup-close' onClick={isClose}> X </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='organizer-popup-content'>
                        <div className="form-left">
                            <div className='input-group'>
                                <label>Event Name</label>
                                <input
                                    type="text"
                                    name="event_name"
                                    placeholder="Enter event name"
                                    value={formData.event_name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='input-group'>
                                <label>Event Description</label>
                                <textarea
                                    name="event_description"
                                    placeholder="Enter event description"
                                    rows="4"
                                    value={formData.event_description}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <div className='input-group'>
                                <label>Event Date and Time</label>
                                <input
                                    type="text"
                                    name="date"
                                    placeholder="Date and Time"
                                    value={formData.date}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='input-group'>
                                <label>Event Type</label>
                                <input
                                    type="text"
                                    name="event_category"
                                    placeholder="Enter event type"
                                    value={formData.event_category}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className='form-right'>
                            <div className='input-group'>
                                <label>Basic Ticket Price</label>
                                <input
                                    type="text"
                                    name="ticket"
                                    placeholder="Enter basic ticket price"
                                    value={formData.ticket}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='input-group'>
                                <label>Organizer Name</label>
                                <input
                                    type="text"
                                    name="organizer_name"
                                    placeholder="Enter organizer name"
                                    value={formData.organizer_name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='input-group'>
                                <label>Contact Number</label>
                                <input
                                    type="text"
                                    name="contact_no"
                                    placeholder="Enter contact number"
                                    value={formData.contact_no}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='input-group'>
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='input-group'>
                                <button type="submit">Add Event</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default OrganizerPopup;
