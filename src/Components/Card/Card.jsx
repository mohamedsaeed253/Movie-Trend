import { Link } from "react-router-dom";
import "./Card.css";
import { motion } from "framer-motion";
import { img_prefix } from "../../Assets/Images/handle-url";
export default function Card(props) {
  let { data, type, page } = props;

  let link = `${img_prefix}${data.poster_path}`;
  return (
    <motion.div
      variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
      className="col-lg-3 col-sm-4 my-2 py-1 d-flex justify-content-around movie-card"
    >
      <div className="show-img">
        <img src={link} alt={data.title || data.name} />
        <Link
          to={`../${type || data.media_type}/${page || "trend"}/${
            data.id
          }/details`}
        >
          {data.name || data.title}
        </Link>
      </div>
    </motion.div>
  );
}
