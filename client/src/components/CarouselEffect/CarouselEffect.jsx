import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { img } from "./img/data";
import classes from "./CarouselEffect.module.css";

function CarouselEffect() {
  return (
    <>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((item, index) => (
          <div key={index}>
            <img src={item} alt={`slide-${index + 1}`} />
          </div>
        ))}
      </Carousel>
      <div className={classes.hero_img}></div>
    </>
  );
}

export default CarouselEffect;
