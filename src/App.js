import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './components/heading/heading';
import Bio from './components/bio/bio';
import About from './components/bio/about/about'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <Bio />
      </div>
    );
  }
}

export default App;
