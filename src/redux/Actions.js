import * as types from './ActionTypes'
import axios from 'axios'

export const getUsers = (users) => {
    return {
        type:types.GET_USERS,
        payload:users
    }
}

export const loadUsers = () => {
    return function(dispatch) {
        console.log("mani")

        axios.get(`${process.env.REACT_USER_API}`).then((res) => {
console.log("res", res)
            dispatch(getUsers(res.data))
        })
        .catch(error => console.log((error)))

}

}
