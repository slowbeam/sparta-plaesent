import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


class ReactResponsiveCarousel extends React.Component {


  render() {
    return (
      <Carousel className="my-carousel"
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        useKeyboardArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        >
        <div className="image-slide">
          <img alt="temp" src={require('../images/hero-panel.png')} />
        </div>
        <div className="image-slide">
          <img alt="temp" src={require('../images/hero-panel-2.png')} />
        </div >
        <div className="image-slide">
          <img alt="temp" src={require('../images/hero-panel-3.png')} />
        </div>

      </Carousel>
    );
  }
};

export default ReactResponsiveCarousel;
