import axios from 'axios';
import {
  parseHeaderForLinks,
  loadMoreDataWhenScrolled,
  ICrudGetAction,
  ICrudGetAllAction,
  ICrudPutAction,
  ICrudDeleteAction
} from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { ITour, defaultValue } from 'app/shared/model/tour.model';

export const ACTION_TYPES = {
  FETCH_TOUR_LIST: 'tour/FETCH_TOUR_LIST',
  FETCH_TOUR: 'tour/FETCH_TOUR',
  CREATE_TOUR: 'tour/CREATE_TOUR',
  UPDATE_TOUR: 'tour/UPDATE_TOUR',
  DELETE_TOUR: 'tour/DELETE_TOUR',
  RESET: 'tour/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ITour>,
  entity: defaultValue,
  links: { next: 0 },
  updating: false,
  totalItems: 0,
  updateSuccess: false
};

export type TourState = Readonly<typeof initialState>;

// Reducer

export default (state: TourState = initialState, action): TourState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_TOUR_LIST):
    case REQUEST(ACTION_TYPES.FETCH_TOUR):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_TOUR):
    case REQUEST(ACTION_TYPES.UPDATE_TOUR):
    case REQUEST(ACTION_TYPES.DELETE_TOUR):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_TOUR_LIST):
    case FAILURE(ACTION_TYPES.FETCH_TOUR):
    case FAILURE(ACTION_TYPES.CREATE_TOUR):
    case FAILURE(ACTION_TYPES.UPDATE_TOUR):
    case FAILURE(ACTION_TYPES.DELETE_TOUR):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_TOUR_LIST):
      const links = parseHeaderForLinks(action.payload.headers.link);
      return {
        ...state,
        links,
        loading: false,
        totalItems: action.payload.headers['x-total-count'],
        entities: loadMoreDataWhenScrolled(state.entities, action.payload.data, links)
      };
    case SUCCESS(ACTION_TYPES.FETCH_TOUR):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_TOUR):
    case SUCCESS(ACTION_TYPES.UPDATE_TOUR):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_TOUR):
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

const apiUrl = 'api/tours';

// Actions

export const getEntities: ICrudGetAllAction<ITour> = (page, size, sort) => {
  const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
  return {
    type: ACTION_TYPES.FETCH_TOUR_LIST,
    payload: axios.get<ITour>(`${requestUrl}${sort ? '&' : '?'}cacheBuster=${new Date().getTime()}`)
  };
};

export const getEntity: ICrudGetAction<ITour> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_TOUR,
    payload: axios.get<ITour>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<ITour> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_TOUR,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  return result;
};

export const updateEntity: ICrudPutAction<ITour> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_TOUR,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<ITour> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_TOUR,
    payload: axios.delete(requestUrl)
  });
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
