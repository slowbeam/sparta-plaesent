import React from 'react';
import ImageSlide from './ImageSlide';

const imgUrls = [
  "../images/hero-panel.png",
  "../images/hero-panel.png",
  "../images/hero-panel.png"
];

class Carousel extends React.Component {

  state = {
    currentImageIndex: 0
  }

  render() {
    return (
      <div className="carousel">
        <ImageSlide url={imgUrls[this.state.currentImageIndex]}/>
      </div>
    );
  }
};

export default Carousel;
