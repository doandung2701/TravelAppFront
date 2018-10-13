import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IRateTour, defaultValue } from 'app/shared/model/rate-tour.model';

export const ACTION_TYPES = {
  FETCH_RATETOUR_LIST: 'rateTour/FETCH_RATETOUR_LIST',
  FETCH_RATETOUR: 'rateTour/FETCH_RATETOUR',
  CREATE_RATETOUR: 'rateTour/CREATE_RATETOUR',
  UPDATE_RATETOUR: 'rateTour/UPDATE_RATETOUR',
  DELETE_RATETOUR: 'rateTour/DELETE_RATETOUR',
  RESET: 'rateTour/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IRateTour>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false
};

export type RateTourState = Readonly<typeof initialState>;

// Reducer

export default (state: RateTourState = initialState, action): RateTourState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_RATETOUR_LIST):
    case REQUEST(ACTION_TYPES.FETCH_RATETOUR):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_RATETOUR):
    case REQUEST(ACTION_TYPES.UPDATE_RATETOUR):
    case REQUEST(ACTION_TYPES.DELETE_RATETOUR):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_RATETOUR_LIST):
    case FAILURE(ACTION_TYPES.FETCH_RATETOUR):
    case FAILURE(ACTION_TYPES.CREATE_RATETOUR):
    case FAILURE(ACTION_TYPES.UPDATE_RATETOUR):
    case FAILURE(ACTION_TYPES.DELETE_RATETOUR):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_RATETOUR_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.FETCH_RATETOUR):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_RATETOUR):
    case SUCCESS(ACTION_TYPES.UPDATE_RATETOUR):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_RATETOUR):
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

const apiUrl = 'api/rate-tours';

// Actions

export const getEntities: ICrudGetAllAction<IRateTour> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_RATETOUR_LIST,
  payload: axios.get<IRateTour>(`${apiUrl}?cacheBuster=${new Date().getTime()}`)
});

export const getEntity: ICrudGetAction<IRateTour> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_RATETOUR,
    payload: axios.get<IRateTour>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<IRateTour> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_RATETOUR,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IRateTour> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_RATETOUR,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<IRateTour> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_RATETOUR,
    payload: axios.delete(requestUrl)
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
