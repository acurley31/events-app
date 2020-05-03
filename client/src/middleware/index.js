import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from './logger';
//import persistInLocalStorage from './persistInLocalStorage';


// Export the applied middleware
export default applyMiddleware(
    thunk,
//    persistInLocalStorage,
    logger,
)
