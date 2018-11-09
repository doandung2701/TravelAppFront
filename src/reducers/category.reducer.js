import { START_PROCESSING,LOAD_CATEGORY,FINISH_PROCESSING,CLEAR_ERRORS } from "../constants";
const initialstate={
    isLoading:false,
    categories:[]
};
export const categoryReducer= (state = initialstate, action)=>{
    switch (action.type) {
    case START_PROCESSING:
      return { ...state, isLoading: true };
    case LOAD_CATEGORY:
    return {...state,categories:action.categories,isLoading:false};
    case FINISH_PROCESSING:
      return { ...state, isLoading: false };
      case CLEAR_ERRORS:
      return { ...state, errors: {} };
    default:
      return state;
    }
  }