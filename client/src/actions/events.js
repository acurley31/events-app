import { EventsAPI } from '../utils/api';

// Action types
export const ADD_EVENTS = 'ADD_EVENTS'
export const UPSERT_EVENT = 'UPSERT_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'


// Synchronous action creators
const addEvents = (data) => ({
    type: ADD_EVENTS,
    data,
})

const upsertEvent = (data) => ({
    type: UPSERT_EVENT,
    data,
})

const deleteEvent = (id) => ({
    type: DELETE_EVENT,
    id,
})

// Asynchronous action creators
export const handleGetEvents = () => {
    return (dispatch) => {
        return EventsAPI.getEvents()
            .then(res => dispatch(addEvents(res.data)))
            .catch(error => error)
    }
}

export const handleAddEvent = (data) => {
    return (dispatch) => {
        return EventsAPI.addEvent(data)
            .then(res => dispatch(upsertEvent(res.data)))
            .catch(error => error)
    }
}

export const handleUpdateEvent = (data) => {
    return (dispatch) => {
        return EventsAPI.updateEvent(data)
            .then(res => dispatch(upsertEvent(res.data)))
            .catch(error => error)
    }
}

export const handleDeleteEvent = (data) => {
    return (dispatch) => {
        dispatch(deleteEvent(data.id))
        return EventsAPI.deleteEvent(data.id)
            .catch(error => dispatch(upsertEvent(data)))
    }
}


