import {
    JOKES_FETCH_REQUEST,
    JOKES_FETCH_SUCCESS,
    JOKES_FETCH_FAILURE
} from '../constants/actionTypes';

import axios from 'axios';
import { API_URL } from '../constants/config';

export function fetchJokes(){
    return async dispatch => {
        await dispatch(requestFetch())
        await axios
            .get(API_URL+`/jokes`, {headers: {authorization: localStorage.getItem('jwt')}})
            .then(async res => {
                if(res.status===200){
                    await dispatch(receiveFetch(res.data));
                }else{
                    await dispatch(errorFetch(res.data.error));
                    return Promise.reject(res.data);
                }
            })
            .catch(err => console.log(err));
    }


    function requestFetch(){
        return {
            type: JOKES_FETCH_REQUEST,
        }
    }

    function receiveFetch(users){
        return {
            type: JOKES_FETCH_SUCCESS,
            payload: users
        }
    }

    function errorFetch(err){
        return {
            type: JOKES_FETCH_FAILURE,
            payload: err
        }
    }
}