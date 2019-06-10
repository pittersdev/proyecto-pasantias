import React from "react";
import "./carrusel.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'


class Carousel extends React.Component {
  render() {
    var props = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToSw: 1,
      slidesToScroll: 1,
      width: 100
    };
    return (
      <Slider {...props}>
        <div>
          <img className="images-carousel" src="./images/prueba1.jpeg"alt=""/>
        </div>
        <div>
          <img className="images-carousel" src="./images/carousel2.jpg" alt=""/>
        </div>
        <div>
          <img className="images-carousel" src="./images/carousel3.jpg" alt=""/>
        </div>
        <div>
        <img className="images-carousel" src="./images/carousel4.jpg" alt=""/>
        </div>
        <div>
          <img className="images-carousel" src="./images/carousel5.jpg" alt=""/>
        </div>
        <div>
          <img className="images-carousel"  src="./images/carousel3.jpg" alt=""/>
        </div>
      </Slider>
    );
  }
}
export default Carousel;
