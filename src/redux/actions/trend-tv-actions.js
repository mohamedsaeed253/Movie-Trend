import axios from "axios";

export const GET_TREND_TV = "GET_TREND_TV";

export const getTrendTv = (trendTv) => {
  return {
    type: GET_TREND_TV,
    payload: trendTv,
  };
};

export const fetchMediaTv = () => {
  return async (dispatch) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/tv/week?api_key=c9fac173689f5f01ba1b0420f66d7093`
    );
    const { results } = data;
    dispatch(getTrendTv(results));
  };
};
