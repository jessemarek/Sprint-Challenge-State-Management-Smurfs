//Action types
import {
    FETCH_SMURF_START,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_FAILURE

} from '../actions'

//Initial application state
export const initialState = {
    smurfList: [],
    isFetching: false
}

export const smurfReducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_SMURF_START:
            return {
                ...state,
                isFetching: true
            }

        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                smurfList: action.payload,
                isFetching: false
            }

        case FETCH_SMURF_FAILURE:
            return {
                ...state,
                isFetching: false
            }

        default:
            return state
    }
}