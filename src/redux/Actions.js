import * as types from './ActionTypes'
import axios from 'axios'

export const getUsers = (users) => {
    return {
        type:types.GET_USERS,
        payload:users
    }
}

export const loadUsers = () => {
    return (dispatch) => {

        axios.get('http://localhost:5000/user').then((res) => {
console.log("res", res)
            dispatch(getUsers(res))
        })
        .catch(error => console.log((error)))

}

}
