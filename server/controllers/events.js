import EventMessage from "../models/eventMessage.js";


// Gets the events
export const getEvents = async (req, res) => {
    try {
        const eventMessages = await EventMessage.find();
        
        console.log(eventMessages);

        res.status(200).json(eventMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Creates an event
export const createEvent = async (req, res) => {
    const event = req.body;

    const newEvent = new EventMessage(event);

    try {
        // save event to database
        await newEvent.save();

        res.status(201).json(newEvent);

    } catch (error) {
        res.status(409).json({ message: error.message })
    }
    res.send('Event Creation');
}