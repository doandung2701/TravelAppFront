import { START_PROCESSING,LOAD_RATE,FINISH_PROCESSING,CLEAR_ERRORS } from "../constants";
const initialstate={
    isLoading:false,
    rates:[]
};
export const rateReducer= (state = initialstate, action)=>{
    switch (action.type) {
    case START_PROCESSING:
      return { ...state, isLoading: true };
    case LOAD_RATE:
    return {...state,rates:action.rates,isLoading:false};
    case FINISH_PROCESSING:
      return { ...state, isLoading: false };
      case CLEAR_ERRORS:
      return { ...state, errors: {} };
    default:
      return state;
    }
  }