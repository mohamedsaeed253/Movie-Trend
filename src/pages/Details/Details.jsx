import axios from "axios";
import { useLoaderData } from "react-router-dom";
import "./Details.css";

export default function Show({ showsList }) {
  let show = useLoaderData();
  console.log(show);
  let link = `https://image.tmdb.org/t/p/w500/${show.poster_path}`;
  return (
    <div>
      <div className="row py-5">
        <div className="col-md-4 px-5">
          <div className="show-img">
            <img src={link} alt={show.title || show.name} />
          </div>
        </div>
        <div className="col-md-8">
          <div className="data">
            <h2 className="mb-0">{show.title || show.name}</h2>
            <p className="pb-2">Rate: {show.vote_average.toFixed(1)}</p>
            <p>{show.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export const showLoader = async ({ params }) => {
  let id = params;
  console.log(params);
  let { data } = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/week?api_key=c9fac173689f5f01ba1b0420f66d7093"
  );
  let { results } = data;
  let show = results.filter((show) => {
    return show.id.toString() === id.id;
  });
  return show[0];
};
