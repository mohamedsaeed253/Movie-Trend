import axios from "axios";

export const GET_GENRES = "GET_GENRES";

export const getGenres = (value) => {
  return {
    type: GET_GENRES,
    payload: value,
  };
};

export const fetchGenres = (genre_ids, type) => {
  let results = [];
  return async (dispatch) => {
    if (type === "movie") {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=c9fac173689f5f01ba1b0420f66d7093&language=en-US`
      );
      let { genres } = data;
      console.log(genres);
      genres?.forEach((elem) => {
        genre_ids?.forEach((id) => {
          id === elem.id && results.push(elem.name);
        });
      });
      dispatch(getGenres(results));
    } else {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/genre/tv/list?api_key=c9fac173689f5f01ba1b0420f66d7093&language=en-US`
      );
      let { genres } = data;
      genres?.forEach((elem) => {
        genre_ids?.forEach((id) => {
          id === elem.id && results.push(elem.name);
        });
      });
      dispatch(getGenres(results));
    }
  };
};
