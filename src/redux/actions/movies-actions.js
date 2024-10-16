import axios from "axios";

export const GET_MOVIES = "GET_MOVIES";

export const PASS = "Pass";

export const checkDetails = (value) => {
  return {
    type: PASS,
    payload: value,
  };
};

export const getMovies = (movies) => {
  return {
    type: GET_MOVIES,
    payload: movies,
  };
};

export const fetchMovies = (page) => {
  return async (dispatch) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=c9fac173689f5f01ba1b0420f66d7093&language=en-US&page=${page}&without_genres=10749`
    );
    const { results } = data;
    dispatch(getMovies(results));
  };
};
