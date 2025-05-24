import { useEffect, useState } from "react";
import classes from "./Product.module.css";
import ProductCard from "./ProductCard";
import axios from "axios";

function Product() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <section className={classes.product_container}>
        {products &&
          products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              rating={product.rating}
            />
          ))}
      </section>
    </>
  );
}

export default Product;
