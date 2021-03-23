import { combineReducers } from "redux";
import { peopleReducer } from "./peopleReducer";
import { filterReducer } from "./filterReducer";

export default combineReducers({
  peopleList: peopleReducer,
  filteredData: filterReducer,
});
