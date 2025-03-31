import mongoose from 'mongoose';

const eventSchema = mongoose.Schema({
    title: String,
    message: String,
    location: String,
    author: String,
    time: Date,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const EventMessage = mongoose.model('EventModel', eventSchema);

export default EventMessage;