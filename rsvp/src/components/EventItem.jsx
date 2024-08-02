import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/EventItem.css';

const EventItem = ({ event }) => (
    <div className="event-item">
        <h2>{event.name}</h2>
        <p>{event.date}</p>
        <Link to={`/events/${event.id}`}>View Details</Link>
    </div>
);

export default EventItem;