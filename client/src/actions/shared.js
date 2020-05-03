import { handleGetEvents } from './events';


// Asynchronous action creators
export const handleGetInitialData = () => {
    return (dispatch) => {
        dispatch(handleGetEvents())
    }
}
