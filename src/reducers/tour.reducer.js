import { START_PROCESSING,LOAD_TOUR,FINISH_PROCESSING,CLEAR_ERRORS,LOAD_TOUR_BY_ID, CREATE_COMMENT } from "../constants";
const initialstate={
    isLoading:false,
    tours:[],
    tourDetail:{},
    commnentOfTour:[],
    rateTour:[]
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
    
     return {...state,tourDetail:action.tourDetail,commnentOfTour:action.tourDetail.comments,rateTour:action.tourDetail.rates,isLoading:false} 
     case CREATE_COMMENT:
     return {...state,commnentOfTour:[...state.commnentOfTour, action.data[0]],rateTour:[...state.rateTour,action.data[1]],isLoading:false};
      case CLEAR_ERRORS:
      return { ...state, errors: {},isLoading:false };
    default:
      return state;
    }
  }