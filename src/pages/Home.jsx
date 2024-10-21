import { Outlet, useParams } from "react-router-dom";
import Card from "../Components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMediaTv } from "../redux/actions/trend-tv-actions";
import { fetchMediaMovie } from "../redux/actions/trend-movie-actions";
/* import MiniCard from "../Components/Card/MiniCard"; */
import { fetchTrend } from "../redux/actions/all-trend-action";
import { motion } from "framer-motion";

export default function Shows() {
  const trendMov = useSelector((state) => state.trendMovie);
  const trendTv = useSelector((state) => state.trendTv);
  const trend = useSelector((state) => state.trend);
  const dispatch = useDispatch();
  let id = useParams();

  useEffect(() => {
    dispatch(fetchMediaMovie());
    dispatch(fetchMediaTv());
    dispatch(fetchTrend());
  }, [dispatch]);
  console.log(trend);
  return (
    <div>
      {undefined === id.id ? (
        <>
          <div className="panner d-flex flex-column overflow-hidden">
            <h1>The Latest Trending</h1>
            <h2 className="mb-5">Movies & Series</h2>
            {/* <div className="d-flex mini-card-container">
              <i class="fa-solid fa-angle-right right"></i>
              <i class="fa-solid fa-angle-left left"></i>
              {trend?.map((item) => {
                return <MiniCard key={item.id} data={item} />;
              })}
            </div> */}
          </div>
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.25 } },
            }}
            initial="hidden"
            animate="show"
            className="container trend my-5"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.2 } },
              }}
              initial="hidden"
              animate="show"
              className="row justify-content-around g-3 my-2"
            >
              <h2 className="text-white pb-2">Trending Movies</h2>
              {trendMov?.map((Show, index) => {
                return <Card key={index} data={Show} />;
              })}
            </motion.div>
            <hr className="text-white" />
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.2 } },
              }}
              initial="hidden"
              animate="show"
              className="row justify-content-around g-3 my-2"
            >
              <h2 className="text-white pb-2">Trending Series</h2>
              {trendTv?.map((Show, index) => {
                return <Card key={index} data={Show} />;
              })}
            </motion.div>
          </motion.div>
        </>
      ) : (
        <div className="container my-5">
          <Outlet />
        </div>
      )}
    </div>
  );
}
