import React, { Component } from 'react';
import './App.scss';
import NavBar from './components/NavBar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <main className="main">
          <p>this is the page content!</p>
        </main>
      </div>
    );
  }
}

export default App;
