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
