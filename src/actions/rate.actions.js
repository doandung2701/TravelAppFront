import { API_BASE_URL, FINISH_PROCESSING, LOAD_RATE } from "../constants";
import axios from "axios";

export const loadRate = () => {
    return (dispatch) => {
       return axios.get(`${API_BASE_URL}/ratetype`)
        .then(response => {
          dispatch(fetchRateTours(response.data));
        })
        .catch(error => {
            dispatch ({ type:FINISH_PROCESSING });
          throw(error);
        });
    };
  };  
  export const fetchRateTours=(rates)=>{
    return {
        type :LOAD_RATE,
        rates
    }
  }