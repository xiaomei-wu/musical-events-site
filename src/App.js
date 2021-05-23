import React from "react";

import { Element } from "react-scroll";

import { Featured } from "./components/Featured";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Element name="featured">
        <Featured />
      </Element>
    </div>
  );
}

export default App;
