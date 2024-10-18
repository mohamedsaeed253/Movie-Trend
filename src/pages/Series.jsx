import React, { useEffect } from "react";
import Card from "../Components/Card/Card";
import { ScrollRestoration, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../Components/Pagination/Pagination";
import { fetchSeries } from "../redux/actions/series-actions";
import { motion } from "framer-motion";

export default function Movies() {
  const type = "tv";
  const seriesList = useSelector((state) => state.series);
  const dispatch = useDispatch();
  let { page } = useParams();
  useEffect(() => {
    dispatch(fetchSeries(page));
  }, [dispatch, page]);
  return (
    <div>
      <ScrollRestoration />
      <div className="container mt-5 pt-1">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
          initial="hidden"
          animate="show"
          className="row g-3 my-2"
        >
          {seriesList.map((Show, index) => {
            return <Card key={index} data={Show} page={page} type={type} />;
          })}
        </motion.div>
        <Pagination type={type} />
      </div>
    </div>
  );
}
