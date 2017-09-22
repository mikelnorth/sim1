import React, { Component } from 'react';
import logo from './logo.svg';
import './add.css';

class Add extends Component {
  constructor(){
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div className="container">

        <p className="name">Name</p>
        <input className="nameBox"/>
        <p className="price">Price</p>
        <input className="currencyinput" placeholder="$0"/>

        <button className="save">+ Add to Inventory</button>



      </div>
    );
  }
}

export default Add;
