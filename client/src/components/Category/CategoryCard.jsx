import React from "react";
import classes from "./CategoryCard.module.css";

function CategoryCard({ data }) {
  return (
    <>
      <div className={classes.category}>
        <a href="#">
          <h2>
            <span>{data.title}</span>
          </h2>
          <img src={data.imgLink} alt={data.title} />
          <p>Shop now</p>
        </a>
      </div>
    </>
  );
}

export default CategoryCard;
