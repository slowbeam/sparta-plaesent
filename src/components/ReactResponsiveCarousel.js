import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ImageSlide from './ImageSlide';
import uuid from 'uuid';


class ReactResponsiveCarousel extends React.Component {

  renderImageSlides = () => {
    const slideArray = [
      require('../images/hero-panel.png'),
      require('../images/hero-panel-2.png'),
      require('../images/hero-panel-3.png')
    ]

    return slideArray.map(url => <ImageSlide key={uuid()} src={url} />)
  }

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

        {this.renderImageSlides()}

      </Carousel>
    );
  }
};

export default ReactResponsiveCarousel;
