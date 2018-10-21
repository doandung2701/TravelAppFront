import { combineReducers } from "redux";
import {AuthReducer} from './user.reducer';
import { providerReducer } from "./provider.reducer";
export default combineReducers({
    auth:AuthReducer,
    provider:providerReducer
})