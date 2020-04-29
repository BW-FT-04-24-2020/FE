import {
    FETCH_STRAINS_START,
    FETCH_STRAINS_SUCCESS,
    FETCH_STRAINS_FAILURE,
} from '../actions';
export const rootReducer = combineReducers({
    saveStrains: SavedStrainsReducer,
});
const initialState = {
    strains: [],
    error: '',
    isFetching: false,
};
const SavedStrainsReducer = (state = initialState, action) => {
    console.log('in SavedStrainsReducer', state, action);
    switch (action.type) {
        case FETCH_STRAINS_START:
            return {
                ...state,
                error: '',
                isFetching: true,
            };
        case FETCH_STRAINS_SUCCESS:
            return {
                ...state,
                strains: action.payload,
                error: '',
                isFetching: false,
            };
        case FETCH_STRAINS_FAILURE:
            return {
                ...state,
                error: action.payolad,
                isFetching: false,
            };
        default:
            return state;
    }
};
