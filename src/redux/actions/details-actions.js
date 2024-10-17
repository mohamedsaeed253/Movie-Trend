import axios from "axios";

export const GET_TYPE = "TYPE";

export const getType = (value) => {
  return {
    type: GET_TYPE,
    payload: value,
  };
};

export const fetchDetails = (type, page, id) => {
  return async (dispatch) => {
    if (type === "movie") {
      if (page === "trend") {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=c9fac173689f5f01ba1b0420f66d7093`
        );
        const { results } = data;
        let info = results.filter((elem) => {
          return elem.id.toString() === id;
        });
        dispatch(getType(info[0]));
      } else {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=c9fac173689f5f01ba1b0420f66d7093&language=en-US&page=${page}&without_genres=10749`
        );
        const { results } = data;
        let info = results.filter((elem) => {
          return elem.id.toString() === id;
        });
        dispatch(getType(info[0]));
      }
    } else {
      if (page === "trend") {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/trending/tv/week?api_key=c9fac173689f5f01ba1b0420f66d7093`
        );
        const { results } = data;
        let info = results.filter((elem) => {
          return elem.id.toString() === id;
        });
        dispatch(getType(info[0]));
      } else {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/discover/tv?api_key=c9fac173689f5f01ba1b0420f66d7093&include_adult=false&language=en-US&page=${page}&sort_by=vote_average.desc&vote_count.gte=1445`
        );
        const { results } = data;
        let info = results.filter((elem) => {
          return elem.id.toString() === id;
        });
        dispatch(getType(info[0]));
      }
    }
  };
};
