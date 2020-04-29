import axios from 'axios';

// Retrieving strains from the api
export const FETCH_STRAINS_START = 'FETCH_STRAINS_START';
export const FETCH_STRAINS_SUCCESS = 'FETCH_STRAINS_SUCCESS';
export const FETCH_STRAINS_FAILURE = 'FETCH_STRAINS_FAILURE';

export const getStrainsData = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_STRAINS_START });

        axios()
            .get('https://medcabinet-strain-api.herokuapp.com/strains/all')
            .then((res) => {
                console.log('res', res);
                dispatch({ type: FETCH_STRAINS_SUCCESS, payload: res }); // UPDATE PAYLOAD////////
            })
            .catch((err) => {
                console.log('error', err);
                dispatch({ type: FETCH_STRAINS_FAILURE });
            });
    };
};
