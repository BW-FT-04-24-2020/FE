import axios from 'axios';
import { authenticAxios } from '../../utils/authenticAxios';

// Retrieving strains from the api

export const getStrainsDataFromActions = () => {
    return (dispatch) => {
        dispatch({
            type: 'FETCH_STRAINS_START',
        });
        axios
            .get('https://medcabinet-strain-api.herokuapp.com/strains/all')
            .then((res) => {
                console.log('res of axios.get: ', res.data);
                dispatch({ type: 'FETCH_STRAINS_SUCCESS' }); // UPDATE PAYLOAD////////
            })
            .catch((err) => {
                console.log('error', err);
                dispatch({ type: 'FETCH_STRAINS_FAILURE' });
            });
    };
};
