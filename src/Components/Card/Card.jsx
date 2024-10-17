import { Link } from "react-router-dom";
import "./Card.css";
export default function Card(props) {
  let { data, type, page } = props;

  let link = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
  return (
    <div className="col-md-3 my-2 py-1">
      <div className="">
        <div className="show-img">
          <img src={link} alt={data.title || data.name} />
        </div>
        <Link
          to={`../${type || data.media_type}/${page || "trend"}/${
            data.id
          }/details`}
        >
          {data.name || data.title}
        </Link>
      </div>
    </div>
  );
}
