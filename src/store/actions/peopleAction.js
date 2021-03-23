import * as TYPES from "../types";
import axios from "axios";

export const getPeople = () => async (dispatch) => {
  dispatch({ type: TYPES.FETCH_PEOPLE_REQUEST });
  try {
    const res = await axios.get(`https://venbest-test.herokuapp.com/`);
    const { data } = res;
    dispatch({
      type: TYPES.FETCH_PEOPLE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TYPES.FETCH_PEOPLE_ERROR,
      payload: error,
    });
  }
};
