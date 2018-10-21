import { START_PROCESSING,LOAD_PROVIDER,FINISH_PROCESSING,CLEAR_ERRORS } from "../constants";
const initialstate={
    isLoading:false,
    provider:[]
};
export const providerReducer= (state = initialstate, action)=>{
    switch (action.type) {
    case START_PROCESSING:
      return { ...state, isLoading: true };
    case LOAD_PROVIDER:
    return {...state,provider:action.providers,isLoading:false};
    case FINISH_PROCESSING:
      return { ...state, isLoading: false };
      case CLEAR_ERRORS:
      return { ...state, errors: {} };
    default:
      return state;
    }
  }