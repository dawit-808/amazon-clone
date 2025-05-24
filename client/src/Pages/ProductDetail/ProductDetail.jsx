import React, { useEffect, useState } from "react";
import classes from "./ProductDetail.module.css";
import LayOut from "../../components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../Api/api";
import ProductCard from "../../components/Product/ProductCard";

function ProductDetail() {
  const { id } = useParams(); // matches :id in route
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error("Failed to load product details:", err));
  }, []);

  return (
    <LayOut>
      <ProductCard {...product} />
    </LayOut>
  );
}

export default ProductDetail;
