import axios from 'axios';

// Backend API settings
/*
const PROTOCAL = 'http'
const SERVER = '127.0.0.1'
const PORT = '8000'
const API_BASE_URL = `${PROTOCAL}://${SERVER}:${PORT}/api`
*/

const PROTOCAL = 'https'
const SERVER = 'events-database.herokuapp.com'
const API_BASE_URL = `${PROTOCAL}://${SERVER}/api`



// Configure the default axios instance
const API = axios.create({
    baseURL: API_BASE_URL,
    timeout: 1000,
    headers: { 'content-type': 'application/json' },
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFToken',
})


// Export the default
export default API
