import { combineReducers } from "redux";
import userReducer from './Reducers';

const rootReducer = combineReducers({
    users: userReducer
})

export default rootReducer