import React from 'react';

import { Element } from 'react-scroll';

import { Featured } from './components/Featured';
import { Header } from './components/Header';
import { Highlights } from './components/Hightlights';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Element name="featured">
        <Featured />
        <Highlights />
      </Element>
    </div>
  );
};
