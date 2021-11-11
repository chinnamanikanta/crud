import * as types from './ActionTypes'
import axios from 'axios'

export const getUsers = (users) => {
    return {
        type:types.GET_USERS,
        payload:users
    }
}

export const loadUsers = (dispatch) => {
    return () => {

        axios.get('http://localhost:5000/user').then((res) => {
            dispatch(getUsers(res.data))
        })
        .catch(error => console.log((error)))

}

}
