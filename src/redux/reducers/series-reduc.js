import { GET_SERIES } from "../actions/series-actions";

export const seriesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_SERIES:
      return [...action.payload];
    default:
      return state;
  }
};
