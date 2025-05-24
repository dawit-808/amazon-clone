import React from "react";
import classes from "./Product.module.css";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";

function ProductCard(product) {
  const { title, price, image, rating, id } = product;

  return (
    <section className={classes.card_container}>
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <h5>{title}</h5>
      <div className={classes.rating}>
        <Rating value={rating?.rate || 0} precision={0.1} />
        <small>{rating?.count}</small>
      </div>
      <div className={classes.price}>
        <CurrencyFormat amount={price} />
      </div>
      <button className={classes.btn}>Add to cart</button>
    </section>
  );
}

export default ProductCard;
