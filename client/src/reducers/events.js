import { ADD_EVENTS, UPSERT_EVENT, DELETE_EVENT } from '../actions/events';
import { mapArrayToObject, removeKeyFromObject } from '../utils/helpers';


// Events reducer
const events = (state={}, action) => {
    switch (action.type) {
        case ADD_EVENTS:
            return mapArrayToObject(action.data)

        case UPSERT_EVENT:
            return {
                ...state,
                [action.data.id]: action.data
            }

        case DELETE_EVENT:
            return removeKeyFromObject(state, action.id)

        default:
            return state
    }

}
export default events
