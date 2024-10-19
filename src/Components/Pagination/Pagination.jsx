import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./pagination.css";

export default function Pagination({ type }) {
  const { page } = useParams();
  const navigate = useNavigate();
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  let lnkPre = `../${type}/${Number(page) - 1}`;
  let lnkNex = `../${type}/${Number(page) + 1}`;
  return (
    <div>
      <nav aria-label="Page navigation example border-0">
        <ul className="pagination flex-wrap justify-content-center my-5 border-0">
          <li className={`page-item ${Number(page) === 1 && "disabled"}`}>
            <Link className="page-link pagi" onClick={() => navigate(lnkPre)}>
              Previous
            </Link>
          </li>
          {pages.map((element, index) => {
            let lnk = `../${type}/${element}`;
            return (
              <li className="page-item" key={index}>
                <button
                  className={`page-link pagi ${
                    Number(page) === element && "active"
                  }`}
                  onClick={() => navigate(lnk)}
                >
                  {element}
                </button>
              </li>
            );
          })}
          <li className="page-item">
            <Link
              scrollReset={false}
              className={`page-link pagi ${
                Number(page) === pages.length && "disabled"
              }  `}
              onClick={() => navigate(lnkNex)}
            >
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
