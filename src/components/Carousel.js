import React from 'react';
import ImageSlide from './ImageSlide';
import imgUrls from '../images/imgUrls';

class Carousel extends React.Component {

  state = {
    currentImageIndex: 0
  }

  handleImageChange = () => {
    if (this.state.currentImageIndex === imgUrls.length - 1 ) {
      this.setState({
        currentImageIndex: 0
      })
    } else {
      this.setState({
        currentImageIndex: this.state.currentImageIndex + 1
      })
    }
  }

  componentDidMount() {
    setInterval(this.handleImageChange, 5000);
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
