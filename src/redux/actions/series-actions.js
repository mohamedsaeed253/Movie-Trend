import axios from "axios";

export const GET_SERIES = "GET_SERIES";

export const getSeries = (series) => {
  return {
    type: GET_SERIES,
    payload: series,
  };
};

export const fetchSeries = (page) => {
  return async (dispatch) => {
    const { data } = await axios.get(
      `
https://api.themoviedb.org/3/discover/tv?api_key=c9fac173689f5f01ba1b0420f66d7093&include_adult=false&language=en-US&page=${page}&sort_by=vote_average.desc&vote_count.gte=1445`
    );
    const { results } = data;
    dispatch(getSeries(results));
  };
};
