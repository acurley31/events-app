import api from './settings';


// API endpoints
const baseURL = '/events/summaries/'


// Define the HTTP requests
const addEventSummary = () => {
    return api.post(baseURL)
}



// Export the API
const EventSummariesAPI = {
    addEventSummary,
}

export default EventSummariesAPI
