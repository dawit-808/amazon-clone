import React, { useContext, useState } from "react";
import classes from "./Payment.module.css";
import LayOut from "../../components/LayOut/LayOut";
import { DataContext } from "../../components/DataProvider/DataProvider";
import ProductCard from "../../components/Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";

function Payment() {
  const [{ user, basket }] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  const total = basket.reduce(
    (amount, item) => amount + item.price * item.amount,
    0
  );

  const [cardError, setCardError] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  const handleChange = (e) => {
    e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
  };

  return (
    <>
      <LayOut>
        <div className={classes.payment_header}>Checkout {totalItem} items</div>
        <section className={classes.payment}>
          <div className={classes.flex}>
            <h1>Delivery Address</h1>
            <div>
              <div>{user.email}</div>
              <div>Addis Ababa</div>
              <div>Ethiopia</div>
            </div>
          </div>
          <hr />
          <div className={classes.flex}>
            <h3>Review items and delivery</h3>
            <div>
              {basket?.map((item) => (
                <ProductCard key={item.id} product={item} flex={true} />
              ))}
            </div>
          </div>
          <hr />

          <div className={classes.flex}>
            <h3>Payment methods</h3>
            <div className={classes.payment_card_container}>
              <div className={classes.payment_details}>
                <form action="">
                  {/* error */}
                  {cardError && (
                    <small style={{ color: "red" }}>{cardError}</small>
                  )}
                  {/* card element */}
                  <CardElement onChange={handleChange} />

                  {/* price */}
                  <div className={classes.payment_price}>
                    <div>
                      <span style={{ display: "flex", gap: "10px" }}>
                        Total Order | <CurrencyFormat amount={total} />
                      </span>
                    </div>
                    <button>Pay Now</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </LayOut>
    </>
  );
}

export default Payment;
