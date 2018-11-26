import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import imgUrls from '../images/imgUrls';
import { Carousel } from 'react-responsive-carousel';


class ReactResponsiveCarousel extends React.Component {


  render() {
    return (
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        useKeyboardArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        >
        <div className="image-slide">
          <img src={imgUrls[0]} />
        </div>
        <div className="image-slide">
          <img src={imgUrls[1]} />
        </div >
        <div className="image-slide">
          <img src={imgUrls[2]} />
        </div>

      </Carousel>
    );
  }
};

export default ReactResponsiveCarousel;
