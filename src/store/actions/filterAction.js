import * as TYPES from "../types";

export const filterMale = (people, value) => {
  return {
    type: TYPES.FILTER_MALE,
    payload: people,
    male: value,
  };
};
export const filterFemale = (people, value) => {
  return {
    type: TYPES.FILTER_FEMALE,
    payload: people,
    female: value,
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
