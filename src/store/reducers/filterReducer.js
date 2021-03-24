import * as TYPES from "../types";

const initialState = {
  peopleFiltered: [],
  sex: "",
  name: ''
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.FILTER_SEX:
      let sexPar = action.sex;
      let filteredSex = action.payload.filter((el) => {
        return el.sex === sexPar;
      });
      if (sexPar === "b") {
        return {
          ...state,
          peopleFiltered: action.payload,
          sex: "",
        };
      }
      return {
        ...state,
        peopleFiltered: filteredSex,
        sex: sexPar,
      };
    case TYPES.FILTER_NAME:
      let name = action.name;
      let filteredNames = action.payload.filter((el) => {
        return el.name.includes(name);
      });
      return {
        ...state,
        peopleFiltered: filteredNames,
        name: name
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
