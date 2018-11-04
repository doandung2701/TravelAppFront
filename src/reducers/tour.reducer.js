import { START_PROCESSING,LOAD_TOUR,FINISH_PROCESSING,CLEAR_ERRORS,LOAD_TOUR_BY_ID } from "../constants";
const initialstate={
    isLoading:true,
    tours:[],
    tourDetail:{}
};
export const tourReducer= (state = initialstate, action)=>{
    switch (action.type) {
    case START_PROCESSING:
      return { ...state, isLoading: true };
    case LOAD_TOUR:
    return {...state,tours:action.tours,isLoading:false};
    case FINISH_PROCESSING:
      return { ...state, isLoading: false };
     case LOAD_TOUR_BY_ID:
    
     return {...state,tourDetail:action.tourDetail,isLoading:false} 
      case CLEAR_ERRORS:
      return { ...state, errors: {} };
    default:
      return state;
    }
  }