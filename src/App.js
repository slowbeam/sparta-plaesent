import React, { Component } from 'react';
import './App.scss';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import ReactResponsiveCarousel from './components/ReactResponsiveCarousel';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <ReactResponsiveCarousel />
      </div>
    );
  }
}

export default App;
