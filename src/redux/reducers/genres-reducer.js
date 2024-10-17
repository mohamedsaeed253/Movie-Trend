import { GET_GENRES } from "../actions/genres-actions";

export const genresReducer = (state = [], action) => {
  switch (action.type) {
    case GET_GENRES:
      return action.payload;
    default:
      return state;
  }
};
