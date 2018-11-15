import { START_PROCESSING, FINISH_PROCESSING, ERROR_SEARCH_TOUR, FETCH_ALL_TOUR, SEARCH_TOUR } from "../constants";

const initialstate={
    results:[],
    isError:false
};
export const searchReducer= (state = initialstate, action)=>{
    switch (action.type) {
    case START_PROCESSING:
      return { ...state };
     case FETCH_ALL_TOUR:
     return {...state,results:action.tours} 
    case SEARCH_TOUR:
    return {...state,results:action.tours};
    case FINISH_PROCESSING:
      return { ...state };
      case ERROR_SEARCH_TOUR:
      return { ...state,isError:true };
    default:
      return state;
    }
  }