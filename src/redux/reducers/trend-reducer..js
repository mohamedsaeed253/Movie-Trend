import { GET_TREND } from "../actions/all-trend-action";

export const trendReducer = (state = [], action) => {
  switch (action.type) {
    case GET_TREND:
      const trend = [...action.payload];
      return trend;
    default:
      return state;
  }
};
