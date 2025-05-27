import React, { useContext } from "react";
import classes from "./Cart.module.css";
import LayOut from "../../components/LayOut/LayOut";
import { DataContext } from "../../components/DataProvider/DataProvider";
import ProductCard from "../../components/Product/ProductCard";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";

function Cart() {
  const [{ basket }, dispatch] = useContext(DataContext);
  const total = basket.reduce(
    (amount, item) => amount + item.price * item.amount,
    0
  );

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />
          <div className={classes.cart}>
            {basket.length === 0 ? (
              <h3>Your basket is empty</h3>
            ) : (
              basket.map((item) => (
                <ProductCard
                  key={item.id}
                  product={item}
                  renderDesk={true}
                  flex={true}
                  renderAdd={false}
                />
              ))
            )}
          </div>
        </div>

        {/* subtotal */}
        {basket.length > 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal ({basket?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" name="" id="" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments">Continue to checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart;
