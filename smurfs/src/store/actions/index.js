import axios from 'axios'
import { baseURL } from '../../index'

//Actions and Action Creators
export const FETCH_SMURF_START = 'FETCH_SMURF_START'
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS'
export const fetchSmurf = () => {
    return dispatch => {
        axios.get(baseURL)
            .then(res => {
                dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data })
            })
            .catch(err => {
                console.log('ERROR FETCHING SMURFS: ', err)
            })
    }
}

export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS'
export const addSmurf = formData => {
    return dispatch => {
        axios.post(baseURL, formData)
            .then(res => {
                dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data })
            })
            .catch(err => {
                console.log('ERROR ADDING SMURF: ', err)
            })
    }
}

export const EDIT_SMURF_SUCCESS = 'EDIT_SMURF_SUCCESS'
export const editSmurf = (data, id) => {
    return dispatch => {
        axios.put(`${baseURL}/${id}`, { ...data })
            .then(res => {
                console.log('EDIT ENTRY: ', res.data)
            })
            .catch(err => {
                console.log('ERROR EDITING SMURF: ', err)
            })
    }
}

export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS'
export const deleteSmurf = id => {
    return dispatch => {
        axios.delete(`${baseURL}/${id}`)
            .catch(err => {
                console.log('ERROR DELETING SMURF: ', err)
            })
    }
}