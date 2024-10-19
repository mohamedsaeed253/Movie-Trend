import { useParams } from "react-router-dom";
import "./Details.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchDetails } from "../../redux/actions/details-actions";
import { fetchGenres } from "../../redux/actions/genres-actions";
import { img_prefix } from "../../Assets/Images/handle-url";

export default function Show() {
  const { type, page, id } = useParams();
  const details = useSelector((state) => state.details);
  const genres = useSelector((state) => state.genres);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDetails(type, page, id));
  }, [type, page, id, dispatch]);
  useEffect(() => {
    dispatch(fetchGenres(details.genre_ids, type));
  }, [type, details.genre_ids, dispatch]);

  let arr = [1, 2, 3, 4, 5];
  let star = details.vote_average + 2;
  let link = `${img_prefix}${details.poster_path}`;
  return (
    <div className="p-5">
      <div className="details-container row justify-content-around p-5">
        <div className="col-lg-4 col-md-9 mb-5 px-5 details">
          <div className="show-img">
            <img src={link} alt={details.title || details.name} />
          </div>
        </div>
        <div className="col-lg-8 col-md-12 p-0">
          <div className="data">
            <h2 className="mb-0">{details.title || details.name}</h2>
            <p className="m-0">
              <span>
                {arr.map(() => {
                  star -= 2;
                  return star > 2 ? (
                    <i class="fa-solid fa-star"></i>
                  ) : star > 1 ? (
                    <i class="fa-solid fa-star-half-stroke"></i>
                  ) : (
                    <i class="fa-regular fa-star"></i>
                  );
                })}
              </span>
            </p>
            <p className="m-0">
              <span>Rate:</span> {details.vote_average?.toFixed(1)}
            </p>
            <p className="m-0">
              <span>Release Date:</span>{" "}
              {details.release_date || details.first_air_date}
            </p>
            <p className="pb-2">
              <span>Genres:</span>{" "}
              {genres.map((item, index) => {
                if (index === genres.length - 1) {
                  return item;
                } else {
                  return `${item} - `;
                }
              })}
            </p>

            <p>
              <span>Overview: </span>
              {details.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
