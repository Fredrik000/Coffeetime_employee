import React, { Component } from "react";

export class Dessertlist extends Component {
  render() {
    return (
      <ul className='item-component-ul'>
        <li
          className='item-component'
          id='Brownie'
          onClick={this.props.showCart}
        >
          <h2 className='item-name'>Brioche</h2>
        </li>
        <li
          className='item-component'
          id='cappucino'
          onClick={this.props.showCart}
        >
          <h2 className='item-name'>Brownie</h2>
        </li>
        <li
          className='item-component'
          id='caramel'
          onClick={this.props.showCart}
        >
          <h2 className='item-name'>Chiapudding</h2>
        </li>
        <li
          className='item-component'
          id='caramel'
          onClick={this.props.showCart}
        >
          <h2 className='item-name'>Kanelbolle</h2>
        </li>
        <li
          className='item-component'
          id='caramel'
          onClick={this.props.showCart}
        >
          <h2 className='item-name'>Scones</h2>
        </li>
        <li
          className='item-component'
          id='caramel'
          onClick={this.props.showCart}
        >
          <h2 className='item-name'>Oreokake</h2>
        </li>
        <li
          className='item-component-empty'
          id='caramel'
          onClick={this.props.showCart}
        >
          <h2 className='item-name'> </h2>
        </li>
        <li
          className='item-component-empty'
          id='caramel'
          onClick={this.props.showCart}
        >
          <h2 className='item-name'> </h2>
        </li>
        <li
          className='item-component-empty'
          id='caramel'
          onClick={this.props.showCart}
        >
          <h2 className='item-name'> </h2>
        </li>
        <li
          className='item-component-empty'
          id='caramel'
          onClick={this.props.showCart}
        >
          <h2 className='item-name'> </h2>
        </li>
        <li
          className='item-component-empty'
          id='caramel'
          onClick={this.props.showCart}
        >
          <h2 className='item-name'> </h2>
        </li>
        <li
          className='item-component-empty'
          id='caramel'
          onClick={this.props.showCart}
        >
          <h2 className='item-name'> </h2>
        </li>
      </ul>
    );
  }
}

export default Dessertlist;
