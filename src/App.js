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
      <VenueNfo />
      <Highlights />
      <Pricing />
      <Map />
      <Footer />
    </div>
  );
};
