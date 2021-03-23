import * as TYPES from "../types";

const initialState = {
  people: null,
  loading: false,
  error: null,
};

export const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.FETCH_PEOPLE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TYPES.FETCH_PEOPLE_SUCCESS:
      return {
        ...state,
        people: action.payload,
        loading: false,
      };
    case TYPES.FETCH_PEOPLE_ERROR:
      return {
        loading: false,
        error: action.payload,
        people: null,
      };
    default:
      return state;
  }
};
