import { useState, useEffect } from "react";
import classes from "./Results.module.css";
import LayOut from "../../components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import { API_URL } from "../../Api/api";
import axios from "axios";
import ProductCard from "../../components/Product/ProductCard";

function Results() {
  const { categoryName } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, [categoryName]);

  return (
    <>
      <LayOut>
        <section>
          <h2 className={classes.h1}>Results</h2>
          <h4 className={classes.h4}>Category / {categoryName}</h4>
          <hr />
          <div className={classes.product_container}>
            {results.length > 0 ? (
              results.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))
            ) : (
              <p>No products found in this category.</p>
            )}
          </div>
        </section>
      </LayOut>
    </>
  );
}

export default Results;
