import axios from  'axios';
import { API_BASE_URL, FINISH_PROCESSING, LOAD_CATEGORY } from "../constants";
export const loadCategory = () => {
    return (dispatch) => {
      return axios.get(`${API_BASE_URL}/category`)
        .then(response => {
          dispatch(fetchCategorySuccess(response.data));
        })
        .catch(error => {
            dispatch ({ type:FINISH_PROCESSING });
          throw(error);
        });
    };
  };
  export const fetchCategorySuccess = (categories) => {
    return {
      type: LOAD_CATEGORY,
      categories
    }
  };
