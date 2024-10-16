import React, { useEffect } from "react";
import Card from "../Components/Card/Card";
import { Outlet, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/actions/movies-actions";
import Pagination from "../Components/Pagination/Pagination";

export default function Movies() {
  const type = "movie";
  const mediaList = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  let { page } = useParams();
  useEffect(() => {
    dispatch(fetchMovies(page));
  }, [dispatch, page]);
  return (
    <div>
      <div className="container mt-5 pt-1">
        {page ? (
          <>
            <div className="row g-3 my-2">
              {mediaList.map((Show, index) => {
                return <Card key={index} data={Show} />;
              })}
            </div>
            <Pagination type={type} />
          </>
        ) : (
          <>
            <Outlet />
          </>
        )}
      </div>
    </div>
  );
}
