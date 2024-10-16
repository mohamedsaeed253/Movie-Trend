import axios from "axios";
import { useLoaderData, useParams } from "react-router-dom";
import "./Details.css";

export default function Show({ showsList }) {
  useParams();

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

export const movieLoader = async ({ params }) => {
  let { id, page } = params;
  console.log(id);
  let { data } = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=c9fac173689f5f01ba1b0420f66d7093&language=en-US&page=${page}&without_genres=10749`
  );
  let { results } = data;
  let show = results.filter((show) => {
    return show.id.toString() === id;
  });
  console.log(show[0]);

  return show[0];
};
