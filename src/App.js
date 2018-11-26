import React, { Component } from 'react';
import './App.scss';
import NavBar from './components/NavBar';
import ReactResponsiveCarousel from './components/ReactResponsiveCarousel';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="carousel-container">
          <div className="overlay">
            <div className="overlay-text">
              <h1>Screening:</h1>
              <br/>
              <h1>DVF Secret Agent Part 2</h1>
              <h3>October 15, 2017</h3>
              <p>Join us for a private screening of DVF Secret Agent Part 2</p>
            </div>
          </div>
          <ReactResponsiveCarousel />
        </div>

      </div>
    );
  }
}

export default App;
