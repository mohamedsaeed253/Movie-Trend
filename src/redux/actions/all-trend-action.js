import axios from "axios";

export const GET_TREND = "GET_TREND";

export const getTrend = (value) => {
  return {
    type: GET_TREND,
    payload: value,
  };
};

export const fetchTrend = () => {
  return async (dispatch) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=c9fac173689f5f01ba1b0420f66d7093`
    );
    const { results } = data;
    dispatch(getTrend(results));
  };
};
