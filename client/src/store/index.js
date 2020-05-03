import { createStore } from 'redux';
import reducer from '../reducers';
import middleware from '../middleware';
//import { STORAGE_KEY } from '../middleware/persistInLocalStorage';


// Create and export the store (attempt to preload state from localStorage)
//const storage = JSON.parse(localStorage.getItem(STORAGE_KEY))
const storage = null
const preloadedState = storage ? storage : {}

export default createStore(reducer, preloadedState, middleware)
