import axios from "axios";
import { ERROR_SEARCH_TOUR, API_BASE_URL, FETCH_ALL_TOUR, SEARCH_TOUR,  } from "../constants";

export const SearchTour = (data) => {
    return (dispatch) => {
      console.log(data);
      if(data.fromDate==null||data.toDate==null){
        return axios.get(`${API_BASE_URL}/tours/search/${data.category}?name=${data.name}`)
        .then(response => {
          console.log(response);
          dispatch(searchSuccess(response.data));
        })
        .catch(error => {
            searchError (error);
          throw(error);
        });
      }else{
        return axios.get(`${API_BASE_URL}/tours/search/${data.category}?name=${data.name}&&fromDate=${data.fromDate}&&toDate=${data.toDate}`)
        .then(response => {
          console.log(response);
          dispatch(searchSuccess(response.data));
        })
        .catch(error => {
            searchError (error);
          throw(error);
        });
      }
      
    };
  };  
  export const searchSuccess = (tours) => {
    return {
      type: SEARCH_TOUR,
      tours
    }
  };
  export const searchError=(error)=>{
      return {
          type :ERROR_SEARCH_TOUR,
          error
      }
  }
  export const loadTourByDefault = () => {
    return (dispatch) => {
       return axios.get(`${API_BASE_URL}/tours`)
        .then(response => {
          dispatch(fetchTourDefault(response.data));
        })
        .catch(error => {
          searchError (error);
          throw(error);
        });
    };
  };  
  export const fetchTourDefault = (tours) => {
    return {
      type: FETCH_ALL_TOUR,
      tours
    }
  };