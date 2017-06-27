import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './components/heading/heading';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
      </div>
    );
  }
}

export default App;
