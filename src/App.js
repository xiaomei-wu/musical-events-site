import React from 'react';

import { Element } from 'react-scroll';

import { Featured } from './components/Featured';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { VenueNfo } from './components/VenueNfo';
import { Highlights } from './components/Hightlights';
import { Pricing } from './components/Pricing';
import { Map } from './components/Map';

export const App = () => {
  return (
    <div className="App">
      <Header />

      <Element name="featured">
        <Featured />
      </Element>

      <Element name="venuenfo">
        <VenueNfo />
      </Element>

      <Element name="highlights">
        <Highlights />
      </Element>

      <Element name="pricing">
        <Pricing />
      </Element>

      <Element name="map">
        <Map />
      </Element>

      <Footer />
    </div>
  );
};
