import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Pagination({ type }) {
  const navigate = useNavigate();
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center my-5">
          <li className="page-item disabled">
            <Link className="page-link">Previous</Link>
          </li>
          {pages.map((element, index) => {
            let lnk = `../${type}/${element}`;
            return (
              <li className="page-item" key={index}>
                <button className="page-link" onClick={() => navigate(lnk)}>
                  {element}
                </button>
              </li>
            );
          })}
          <li className="page-item">
            <Link className="page-link" to="#">
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
