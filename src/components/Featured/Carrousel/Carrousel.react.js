import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import slideOne from 'resources/images/slide_one.jpg';
import slideTwo from 'resources/images/slide_two.jpg';
import slideThree from 'resources/images/slide_three.jpg';

import { CarrouselWrapper, CarrouselImage } from './Carrrousel.styled';

export const Carrousel = () => {
  // Style setting for Slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
  };

  return (
    //make the height of this div to the innerheight of the screen, which is nice
    <CarrouselWrapper
      style={{
        height: `${window.innerHeight}px`,
      }}
    >
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Slider {...settings}>
        <div>
          <CarrouselImage
            className="carrousel_image"
            style={{
              background: `url(${slideOne})`,
              height: `${window.innerHeight}px`,
            }}
          />
        </div>

        <div>
          <CarrouselImage
            className="carrousel_image"
            style={{
              background: `url(${slideTwo})`,
              height: `${window.innerHeight}px`,
            }}
          />
        </div>
        <div>
          <CarrouselImage
            className="carrousel_image"
            style={{
              background: `url(${slideThree})`,
              height: `${window.innerHeight}px`,
            }}
          />
        </div>
      </Slider>
    </CarrouselWrapper>
  );
};
