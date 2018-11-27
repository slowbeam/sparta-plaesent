import React, { Component } from 'react';
import './App.scss';
import NavBar from './components/NavBar';
import ReactResponsiveCarousel from './components/ReactResponsiveCarousel';
import Overlay from './components/Overlay';
import Footer from './components/Footer';
import MasonryGrid from './containers/MasonryGrid';


class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="App">
          <NavBar />
          <div className="carousel-container">
            <Overlay />
            <ReactResponsiveCarousel />
          </div>
          <MasonryGrid />
        </div>
        <Footer />
      </div>

    );
  }
}

export default App;
