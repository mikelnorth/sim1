import React, { Component } from 'react';
// import logo from './logo.svg';
import './add.css';
import Header from '../header/Header.js'

class Add extends Component {
  constructor(){
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <div className="header"></div>
        
      <div className="container">

        <p className="name">Name</p>
        <input className="nameBox"/>
        <p className="price">Price</p>
        <input className="currencyinput" placeholder="$0"/>

        <button className="save">+ Add to Inventory</button>


        </div>
      </div>
    );
  }
}

export default Add;
