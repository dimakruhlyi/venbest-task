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
    case TYPES.FILTER_NAME:
      let name = action.name;
      let filteredNames = action.payload.filter((el) => {
        return el.name.includes(name);
      });
      return {
        ...state,
        peopleFiltered: filteredNames,
      };
    case TYPES.FILTER_LASTNAME:
      let lastname = action.lastname;
      let filteredLastNames = action.payload.filter((el) => {
        return el.lastname.includes(lastname);
      });
      return {
        ...state,
        peopleFiltered: filteredLastNames,
      };
    case TYPES.FILTER_AGE:
      let age = action.age;
      let filteredAge = action.payload.filter((el) => {
        return JSON.stringify(el.age) === age;
      });
      if (age === "") {
        return {
          ...state,
          peopleFiltered: action.payload,
        };
      }
      return {
        ...state,
        peopleFiltered: filteredAge,
      };
    default:
      return state;
  }
};
