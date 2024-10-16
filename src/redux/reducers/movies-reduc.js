import { GET_MOVIES, PASS } from "../actions/movies-actions";

export const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_MOVIES:
      return [...action.payload];
    case PASS:
      return action.payload;
    default:
      return state;
  }
};

export const moviesDetailsReducer = (state = false, action) => {
  switch (action.type) {
    case PASS:
      return action.payload;
    default:
      return state;
  }
};
