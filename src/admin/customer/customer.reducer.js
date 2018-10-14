import axios from 'axios';
export const ACTION_TYPES = {
  FETCH_CUSTOMER_LIST: 'customer/FETCH_CUSTOMER_LIST',
  FETCH_CUSTOMER: 'customer/FETCH_CUSTOMER',
  CREATE_CUSTOMER: 'customer/CREATE_CUSTOMER',
  UPDATE_CUSTOMER: 'customer/UPDATE_CUSTOMER',
  DELETE_CUSTOMER: 'customer/DELETE_CUSTOMER',
  RESET: 'customer/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [],
  entity: {},
  updating: false,
  updateSuccess: false
};

// Reducer

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_CUSTOMER_LIST:
    case ACTION_TYPES.FETCH_CUSTOMER:
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case ACTION_TYPES.CREATE_CUSTOMER:
    case ACTION_TYPES.UPDATE_CUSTOMER:
    case ACTION_TYPES.DELETE_CUSTOMER:
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case ACTION_TYPES.FETCH_CUSTOMER_LIST:
    case ACTION_TYPES.FETCH_CUSTOMER:
    case ACTION_TYPES.CREATE_CUSTOMER:
    case ACTION_TYPES.UPDATE_CUSTOMER:
    case ACTION_TYPES.DELETE_CUSTOMER:
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case ACTION_TYPES.FETCH_CUSTOMER_LIST:
      return {
        ...state,
        loading: false,
        entities: action.payload.data
      };
    case ACTION_TYPES.FETCH_CUSTOMER:
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case ACTION_TYPES.CREATE_CUSTOMER:
    case ACTION_TYPES.UPDATE_CUSTOMER:
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case ACTION_TYPES.DELETE_CUSTOMER:
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: {}
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

const apiUrl = 'api/customers';

// Actions

export const getEntities = (page, size,sort) => ({
  type: ACTION_TYPES.FETCH_CUSTOMER_LIST,
  payload: axios.get(`${apiUrl}?cacheBuster=${new Date().getTime()}`)
});

export const getEntity = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_CUSTOMER,
    payload: axios.get(requestUrl)
  };
};

export const createEntity = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_CUSTOMER,
    payload: axios.post(apiUrl, entity)
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_CUSTOMER,
    payload: axios.put(apiUrl, entity)
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_CUSTOMER,
    payload: axios.delete(requestUrl)
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
