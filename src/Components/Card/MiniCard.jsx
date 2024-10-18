import React from "react";
import "./Card.css";
import { img_prefix } from "../../Assets/Images/handle-url";

export default function MiniCard({ data }) {
  let link = `${img_prefix}${data.poster_path}`;
  return (
    <div className="mini-card">
      <img className="mini-card-img" src={link} alt="..." />
    </div>
  );
}
