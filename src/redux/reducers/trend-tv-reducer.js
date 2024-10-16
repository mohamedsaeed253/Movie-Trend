import { GET_TREND_TV } from "../actions/trend-tv-actions";

export const trendTvReducer = (state = [], action) => {
  switch (action.type) {
    case GET_TREND_TV:
      const mediaTv = [...action.payload];
      return mediaTv;
    default:
      return state;
  }
};
