import { combineReducers } from "redux";
import {AuthReducer} from './user.reducer';
import { providerReducer } from "./provider.reducer";
import { tourReducer } from "./tour.reducer";
import { rateReducer } from "./rate.reducer";
import { categoryReducer } from "./category.reducer";
export default combineReducers({
    auth:AuthReducer,
    provider:providerReducer,
    tour:tourReducer,
    rate:rateReducer,
    category:categoryReducer
})