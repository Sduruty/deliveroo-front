import React from "react";
import "./index.css";

const MenuItem = ({ data }) => {
  return (
    <div className="menu-item-container">
      <div className="card">
        <p>{data.title}</p>
        <p>{data.description && data.description.slice(0, 60) + "..."}</p>
        <p>{data.price}</p>
      </div>
      {data.picture && <img src={data.picture} alt={data.title} />}
    </div>
  );
};

export default MenuItem;
