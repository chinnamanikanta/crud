import * as types from './ActionTypes'

const initialState = {
    users:[],
    user:{},
    loading:false
}

const userReducer = (state=initialState,{type,payload}) => {

    switch(type) {

        case types.GET_USERS : 
        return {
            ...state,
            users:payload
        }

        default :
            return state
    }

}

export default userReducer