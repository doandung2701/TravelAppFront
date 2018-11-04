import axios from  'axios';
import { API_BASE_URL, LOAD_PROVIDER, FINISH_PROCESSING } from "../constants";
export const loadProvider = () => {
    return (dispatch) => {
      return axios.get(`${API_BASE_URL}/categorys`)
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
