import React, { useState, useEffect } from 'react';
import EventItem from './EventItem';
import '../styles/EventList.css';

const EventList = () => {
    const [events, setEvents] = useState([]);
    
    useEffect(() => {
        fetch('/api/events')
            .then(response => response.json())
            .then(data => setEvents(data));
    }, []);

    return (
        <div className="event-list">
            {events.map(event => (
                <EventItem key={event.id} event={event} />
            ))}
        </div>
    );
}

export default EventList;