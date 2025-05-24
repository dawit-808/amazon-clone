import React from "react";
import classes from "./Product.module.css";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";

function ProductCard(product) {
  const { title, price, image, rating } = product;

  return (
    <section className={classes.card_container}>
      <a href="#">
        <img src={image} alt={title} />
      </a>
      <h5>{title}</h5>
      <div className={classes.rating}>
        <Rating defaultValue={rating?.rate} precision={0.1} />
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
