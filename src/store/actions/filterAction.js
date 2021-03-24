import * as TYPES from "../types";

export const filterSex = (people, value) => {
  return {
    type: TYPES.FILTER_SEX,
    payload: people,
    sex: value,
  };
};
export const filterAge = (people, value) => {
  return {
    type: TYPES.FILTER_AGE,
    payload: people,
    age: value,
  };
};
export const filterName = (people, value) => {
  return {
    type: TYPES.FILTER_NAME,
    payload: people,
    name: value,
  };
};
export const filterLastName = (people, value) => {
  return {
    type: TYPES.FILTER_LASTNAME,
    payload: people,
    lastname: value,
  };
};
