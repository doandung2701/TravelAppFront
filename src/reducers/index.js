import { combineReducers } from "redux";
import {AuthReducer} from './user.reducer';
export default combineReducers({
    auth:AuthReducer
})