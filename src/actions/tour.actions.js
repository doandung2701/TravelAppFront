import {API_BASE_URL, LOAD_TOUR, FINISH_PROCESSING,LOAD_TOUR_BY_ID } from "../constants";
import axios from  'axios';
export const loadTour = () => {
    return (dispatch) => {
      return axios.get(`${API_BASE_URL}/tours`)
        .then(response => {
          dispatch(fetchTours(response.data));
        })
        .catch(error => {
            dispatch ({ type:FINISH_PROCESSING });
          throw(error);
        });
    };
  };  
  export const fetchTours = (tours) => {
    return {
      type: LOAD_TOUR,
      tours
    }
  };
  export const loadTourByID = (tourID) => {
    return (dispatch) => {
      return axios.get(`${API_BASE_URL}/tours/${tourID}`)
        .then(response => {
          dispatch(fetchToursByIdSuccess(response.data));
        })
        .catch(error => {
            dispatch ({ type:FINISH_PROCESSING });
          throw(error);
        });
    };
  };  
  export const fetchToursByIdSuccess = (tourDetail) => {
    return {
      type: LOAD_TOUR_BY_ID,
      tourDetail
    }
  };