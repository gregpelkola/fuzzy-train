import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/EventDetails.css';

const EventDetails = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        fetch(`/api/events/${id}`)
            .then(response => response.json())
            .then(data => setEvent(data));
    }, [id]);

    if (!event) {
        return <div>Loading...</div>;
    }

    return (
        <div className="event-details">
            <h2>{event.name}</h2>
            <p>{event.date}</p>
            <p>{event.description}</p>
        </div>
    );
};

export default EventDetails;