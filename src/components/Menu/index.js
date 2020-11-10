import React from "react";
import "./index.css";
import Category from "../Category"

const Menu = ({ data }) => {
  return (
    <div className="menu-container">
      {data.map((category, index) => {
        return <Category key={index} data={category} />;
      })}
    </div>
  );
};

export default Menu;
