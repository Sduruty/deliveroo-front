import React from "react";
import "./index.css";
import MenuItem from "../MenuItem";

const Category = ({ data }) => {
  return (
    data.meals.length > 0 && (
      <div>
        <h3>{data.name}</h3>
        <div className="category-menu-container">
          {data.meals.map((item, index) => {
            return <MenuItem key={item.id} data={item} />;
          })}
        </div>
      </div>
    )
  );
};

export default Category;
