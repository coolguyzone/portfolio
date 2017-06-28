import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './components/heading/heading';
import Bio from './components/bio/bio';
import Portfolio from './components/portfolio/portfolio';
import CurrentProjects from './components/current-projects/current-projects';
import Contact from './components/contact/contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <Bio />
        <Portfolio />
        <CurrentProjects />
        <Contact />
      </div>
    );
  }
}

export default App;
