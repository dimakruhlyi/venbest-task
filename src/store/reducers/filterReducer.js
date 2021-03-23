import * as TYPES from "../types";

const initialState = {
  peopleFiltered: [],
  male: false,
  female: false,
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.FILTER_MALE:
      if (action.male) {
        return {
          ...state,
          peopleFiltered: action.payload.filter((el) => el.sex === "m"),
          male: action.male,
        };
      } else {
        return {
          ...state,
          peopleFiltered: action.payload.filter((el) => el.sex === "f"),
          male: action.male,
        };
      }

    case TYPES.FILTER_FEMALE:
      if (action.female) {
        return {
          ...state,
          peopleFiltered: action.payload.filter((el) => el.sex === "f"),
          female: action.female,
        };
      } else {
        return {
          ...state,
          peopleFiltered: action.payload.filter((el) => el.sex === "m"),
          female: action.female,
        };
      }
    default:
      return state;
  }
};
