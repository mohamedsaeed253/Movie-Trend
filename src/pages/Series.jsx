import React, { useEffect } from "react";
import Card from "../Components/Card/Card";
import { ScrollRestoration, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../Components/Pagination/Pagination";
import { fetchSeries } from "../redux/actions/series-actions";

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
        <div className="row g-3 my-2">
          {seriesList.map((Show, index) => {
            return <Card key={index} data={Show} page={page} type={type} />;
          })}
        </div>
        <Pagination type={type} />
      </div>
    </div>
  );
}
