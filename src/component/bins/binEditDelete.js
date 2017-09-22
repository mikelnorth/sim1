import React, { Component } from 'react';
import './binEditDelete.css';

class binEditDelete extends Component {
  constructor(){
    super();
    this.state = {
      editedName: '',
      editedPrice: '',
      canEdit: false

    }
  this.editName = this.editName.bind(this)
  this.editPrice = this.editPrice.bind(this)
  this.saveItem = this.saveItem.bind(this)
  this.allowEdit = this.allowEdit.bind(this)

  }

  allowEdit(){
    this.setState({
      canEdit: true
    })
  }

  editName(e){
    this.setState({
      editedName: e
    })
  }

  saveItem(){
    this.setState({
      editedName: "newName",
      editedPrice: "newPrice"
    })
  }

  editPrice(e){
    this.setState({
      editedPrice: e
    })
  }

  render() {
    return (
      <div>
        <div className="header"></div>
      <div className="container">

        <img src="http://lorempixel.com/200/200/business/" className="pic"/>
        <div className="rightSide">
          <p className="name">Name</p>
          <input disabled={!this.state.canEdit} className="nameBox" placeholder="Item"  value={this.state.editedName} onChange={ (e) => this.editName(e)}/>
          <p className="price">Price</p>
          <input disabled={!this.state.canEdit} className="currencyinput" placeholder="$" value={this.state.editedPrice} onChange={ (e) => this.editPrice(e)}/>
          <div className="buttons">
            {!this.state.canEdit ? <button className="editDelete" onClick={this.allowEdit}>Edit</button> : <button className="save" onClick={this.saveItem}>Save</button>}
            <button className="editDelete">Delete</button>
          </div>

        </div>


        </div>
      </div>
    );
  }
}

export default binEditDelete;
