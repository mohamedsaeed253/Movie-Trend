import { useParams } from "react-router-dom";
import "./Details.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchDetails } from "../../redux/actions/details-actions";

export default function Show() {
  const { type, page, id } = useParams();
  const details = useSelector((state) => state.details);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDetails(type, page, id));
  }, [type, page, id, dispatch]);
  console.log(details);
  let link = `https://image.tmdb.org/t/p/w500/${details.poster_path}`;
  return (
    <div className="p-5">
      <div className="row p-5">
        <div className="col-md-4 px-5">
          <div className="show-img">
            <img src={link} alt={details.title || details.name} />
          </div>
        </div>
        <div className="col-md-8">
          <div className="data">
            <h2 className="mb-0">{details.title || details.name}</h2>
            <p className="m-0">Rate: {details.vote_average?.toFixed(1)}</p>
            <p className="pb-2">
              Release Date: {details.release_date || details.first_air_date}
            </p>

            <p>{details.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
