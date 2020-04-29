export const rootReducer = combineReducers({
    saveStrains: SavedStrainsReducer,
});

const SavedStrainsReducer = (state, action) => {
    console.log('in SavedStrainsReducer', state, action);
    switch (action.type) {
        case 'SAVE_STRAIN':
            return {
                state,
            };
        case 'REMOVE_SAVED_STRAIN':
            return {
                state,
            };
        default:
            return state;
    }
};
