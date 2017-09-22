import React, { Component } from 'react';
import './App.css';
import Home from './component/home/Home.js';
import router from './router.js';

class App extends Component {
  render() {
    return (
      { router }
      <Home />
    );
  }
}

export default App;
