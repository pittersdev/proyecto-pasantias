import React from "react";
import "./carrusel.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'


class Carousel extends React.Component {
  render() {
    return ( 
     <Slider>
          <div className="slider">
              <img  className="images-carousel" src="./images/carousel4.jpg" alt=""/>
          </div>
           <div className="slider">
              <img className="images-carousel" src="./images/carousel5.jpg" alt=""/>
          </div>
          <div className="slider">
              <img className="images-carousel" src="./images/btccarousel4.png" alt=""/>
          </div>
          <div className="slider">
              <img className="images-carousel" src="https://www.adslzone.net/app/uploads/2018/08/bitcoin-1.jpg"/>
          </div>
     </Slider>
   
    );
  }
}
export default Carousel;
