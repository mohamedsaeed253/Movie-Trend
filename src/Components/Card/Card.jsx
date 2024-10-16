import { Link } from "react-router-dom";
import "./Card.css";
import { useDispatch } from "react-redux";
import { checkDetails } from "../../redux/actions/movies-actions";

export default function Card(props) {
  const dispatch = useDispatch();
  let { data } = props;
  let link = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
  return (
    <div className="col-md-3 my-2 py-1">
      <div className="">
        <div className="show-img">
          <img src={link} alt={data.title || data.name} />
        </div>
        <Link
          to={`${data.id}`}
          onClick={() => {
            dispatch(checkDetails(true));
          }}
        >
          {data.name || data.title}
        </Link>
      </div>
    </div>
  );
}
