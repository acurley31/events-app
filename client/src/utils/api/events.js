import api from './settings';


// API endpoints
const baseURL = '/events/'
const detailURL = (id) => `${baseURL}${id}/`


// Define the HTTP requests
const getEvents = () => {
    return api.get(baseURL)
}

const addEvent = (data) => {
    return api.post(baseURL, data)
}

const updateEvent = (data) => {
    return api.patch(detailURL(data.id), data)
}

const deleteEvent = (id) => {
    return api.delete(detailURL(id))
}


// Export the API
const EventsAPI = {
    getEvents,
    addEvent,
    updateEvent,
    deleteEvent,
}

export default EventsAPI
