import { useEffect, useState } from "react";
import classes from "./Product.module.css";
import ProductCard from "./ProductCard";
import axios from "axios";
import Loader from "../../components/Loader/Loader";

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className={classes.product_container}>
          {products.map((product) => (
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
      )}
    </>
  );
}

export default Product;
