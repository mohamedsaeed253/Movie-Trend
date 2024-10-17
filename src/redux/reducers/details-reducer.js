import { GET_TYPE } from "../actions/details-actions";

export const DetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_TYPE:
      return action.payload;
    default:
      return state;
  }
};
