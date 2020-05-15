import axios from 'axios'
import { baseURL } from '../../index'

//Actions and Action Creators
export const FETCH_SMURF_START = 'FETCH_SMURF_START'
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS'
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE'
export const fetchSmurf = () => {
    return dispatch => {
        axios.get(baseURL)
            .then(res => {
                dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data })
            })
            .catch(err => {
                console.log(err)
            })
    }
}