import { GET_TREND_MOV } from "../actions/trend-movie-actions";

export const trendMovieReducer = (state = [], action) => {
  switch (action.type) {
    case GET_TREND_MOV:
      const mediaMov = [...action.payload];
      return mediaMov;
    default:
      return state;
  }
};
