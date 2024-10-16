import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg nav-bg navbar-dark p-1">
        <div className="container ">
          <Link className="navbar-brand fs-2 m-0 p-0 fw-bold" to="">
            <i className="fa-solid fa-play fs-3 me-1"></i>
            Trend
          </Link>
          <div
            className="collapse navbar-collapse justify-content-between px-4 nav-links"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item mx-2">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link " aria-current="page" to="movie/1">
                  Movies
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="tv/1">
                  Series
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav icons">
              <li className="nav-item ">
                <Link className="nav-link" aria-current="page" to="login">
                  Login
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" aria-current="page" to="register">
                  Register
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" aria-current="page" to="#">
                  <i className="fa-brands fa-x-twitter"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="#">
                  <i className="fa-brands fa-facebook"></i>
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="#">
                  <i className="fa-brands fa-discord"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
