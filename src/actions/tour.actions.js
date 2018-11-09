import {API_BASE_URL, LOAD_TOUR,START_PROCESSING, FINISH_PROCESSING,LOAD_TOUR_BY_ID, CREATE_COMMENT } from "../constants";
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
  export const createCommentServer=(comment)=>{
    return (dispatch) => {
      return axios.post(`${API_BASE_URL}/comment/tour`,comment)
       .then(response => {
         console.log(response);
         dispatch(createCommnentSuccess(response.data));
       })
       .catch(error => {
           dispatch ({ type:FINISH_PROCESSING });
         throw(error);
       });
   };
  }
  export const createCommnentSuccess=(data)=>{
    return {
      type :CREATE_COMMENT,
      data
    }
  }
  export const loadTourByCategory=(category)=>{
    return dispatch=>{
      dispatch({type:START_PROCESSING});
      return axios.get(`${API_BASE_URL}/tours/category/${category}`)
      .then(response => {
        dispatch(fetchTours(response.data));
        dispatch ({ type:FINISH_PROCESSING });
      }).catch(error => {
        dispatch ({ type:FINISH_PROCESSING });
      throw(error);
    });
    }
  }