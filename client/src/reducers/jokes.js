import {
    ERROR,
    JOKES_FETCH_REQUEST,
    JOKES_FETCH_SUCCESS,
    JOKES_FETCH_FAILURE
} from '../constants/actionTypes';

const initialState = {
    jokes: [],
    isFetching: false,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case JOKES_FETCH_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        
        case JOKES_FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                jokes: action.payload
            }
        
        case JOKES_FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }

        case ERROR:
            return {
                ...state,
                err: action.payload
            }

        default:
            return state;
    }
}
