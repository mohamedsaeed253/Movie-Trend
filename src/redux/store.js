import { applyMiddleware, combineReducers, createStore } from "redux";
import { trendMovieReducer } from "./reducers/trend-movie-reducer.js";
import { thunk } from "redux-thunk";
import { moviesDetailsReducer, moviesReducer } from "./reducers/movies-reduc";
import { seriesReducer } from "./reducers/series-reduc";
import { trendTvReducer } from "./reducers/trend-tv-reducer.js";

const reducers = combineReducers({
  trendMovie: trendMovieReducer,
  trendTv: trendTvReducer,
  movies: moviesReducer,
  moviesCheck: moviesDetailsReducer,
  series: seriesReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
