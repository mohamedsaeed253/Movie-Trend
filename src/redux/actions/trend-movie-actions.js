import axios from "axios";

export const GET_TREND_MOV = "GET_TREND_MOV";

export const getTrendMovie = (trendMovie) => {
  return {
    type: GET_TREND_MOV,
    payload: trendMovie,
  };
};

export const fetchMediaMovie = () => {
  return async (dispatch) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=c9fac173689f5f01ba1b0420f66d7093`
    );
    const { results } = data;
    dispatch(getTrendMovie(results));
  };
};
