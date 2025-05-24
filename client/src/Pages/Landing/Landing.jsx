import React from "react";
import CarouselEffect from "../../components/CarouselEffect/CarouselEffect";
import Category from "../../components/Category/Category";
import LayOut from "../../components/LayOut/LayOut";
import Product from "../../components/Product/Product";

function Landing() {
  return (
    <LayOut>
      <CarouselEffect />
      <Category />
      <Product />
    </LayOut>
  );
}

export default Landing;
