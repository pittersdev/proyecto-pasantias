import React, { Component } from 'react';
// import Banner from "./banner/banner.js"
import Carousel from './carousel/carrusel';
import PriceRow from "./price-row/price-row.js";
import './home.css';


class Home extends Component {
  render() {
    return (
      <div>
        <Carousel/>
        <PriceRow/>
      </div>

    );
  }
}

export default Home;
