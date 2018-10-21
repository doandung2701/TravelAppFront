import {API_BASE_URL, LOAD_PROVIDER, FINISH_PROCESSING } from "../constants";
import axios from  'axios';
export const loadProvider = () => {
    return (dispatch) => {
      return axios.get(`${API_BASE_URL}/providers`)
        .then(response => {
          dispatch(fetchProviders(response.data));
        })
        .catch(error => {
            dispatch ({ type:FINISH_PROCESSING });
          throw(error);
        });
    };
  };
  export const fetchProviders = (providers) => {
    return {
      type: LOAD_PROVIDER,
      providers
    }
  };