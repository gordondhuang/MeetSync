import React from 'react';
import { useSelector } from 'react-redux';

const Event = () => {
    const events = useSelector((state) => state.events);
    return (
        <h1>Event</h1>
    )
}

export default Event;