import React from "react";
import classes from "./Product.module.css";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";

function ProductCard({ product, flex, renderDesk }) {
  const { title, price, image, rating, id, description } = product;

  return (
    <section
      className={`${classes.card_container} ${
        flex ? classes.product_flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
      </Link>

      <div className={classes.product_content}>
        <h4>{title}</h4>

        {renderDesk && <p className={classes.description}>{description}</p>}

        <div className={classes.rating}>
          <Rating name="half-rating" defaultValue={5} precision={0.1} />
          <small>{rating?.count}</small>
        </div>

        <div className={classes.price}>
          <CurrencyFormat amount={price} />
        </div>

        <button className={classes.btn}>Add to cart</button>
      </div>
    </section>
  );
}

export default ProductCard;
