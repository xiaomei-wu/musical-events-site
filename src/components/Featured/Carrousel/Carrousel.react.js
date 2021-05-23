import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide_one from "../../../resources/images/slide_one.jpg";
import slide_two from "../../../resources/images/slide_two.jpg";
import slide_three from "../../../resources/images/slide_three.jpg";

import { CarrouselWrapper, CarrouselImage } from "./Carrrousel.styled";

export const Carrousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
  };

  return (
    <CarrouselWrapper
      style={{
        height: `${window.innerHeight}px`,
      }}
    >
      <Slider {...settings}>
        <div>
          <CarrouselImage
            className="carrousel_image"
            style={{
              background: `url(${slide_one})`,
              height: `${window.innerHeight}px`,
            }}
          ></CarrouselImage>
        </div>

        <div>
          <CarrouselImage
            className="carrousel_image"
            style={{
              background: `url(${slide_two})`,
              height: `${window.innerHeight}px`,
            }}
          ></CarrouselImage>
        </div>
        <div>
          <CarrouselImage
            className="carrousel_image"
            style={{
              background: `url(${slide_three})`,
              height: `${window.innerHeight}px`,
            }}
          ></CarrouselImage>
        </div>
      </Slider>
    </CarrouselWrapper>
  );
};
