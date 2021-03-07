import React, { Component } from "react";

export class drinklist extends Component {
  render() {
    return (
      <ul
        className='item-component-ul'
        style={{ opacity: this.props.listOpacity }}
      >
        <li
          className='item-component'
          id='americano'
          onClick={this.props.showOrder}
        >
          <h2 className='item-name'>Filterkaffe</h2>
        </li>
        <li
          className='item-component'
          id='cappucino'
          onClick={this.props.showOrder}
        >
          <h2 className='item-name'>Americano</h2>
        </li>
        <li
          className='item-component'
          id='caramel'
          onClick={this.props.showOrder}
        >
          <h2 className='item-name'>Iskaffe</h2>
        </li>
        <li
          className='item-component'
          id='caramel'
          onClick={this.props.showOrder}
        >
          <h2 className='item-name'>Cappuccino</h2>
        </li>
        <li
          className='item-component'
          id='caramel'
          onClick={this.props.showOrder}
        >
          <h2 className='item-name'>Iste</h2>
        </li>
        <li
          className='item-component'
          id='caramel'
          onClick={this.props.showOrder}
        >
          <h2 className='item-name'>Caramel</h2>
        </li>
        <li
          className='item-component-empty'
          id='caramel'
          onClick={this.props.showOrder}
        >
          <h2 className='item-name'> </h2>
        </li>
        <li
          className='item-component-empty'
          id='caramel'
          onClick={this.props.showOrder}
        >
          <h2 className='item-name'> </h2>
        </li>
        <li
          className='item-component-empty'
          id='caramel'
          onClick={this.props.showOrder}
        >
          <h2 className='item-name'> </h2>
        </li>
        <li
          className='item-component-empty'
          id='caramel'
          onClick={this.props.showOrder}
        >
          <h2 className='item-name'> </h2>
        </li>
        <li
          className='item-component-empty'
          id='caramel'
          onClick={this.props.showOrder}
        >
          <h2 className='item-name'> </h2>
        </li>
        <li
          className='item-component-empty'
          id='caramel'
          onClick={this.props.showOrder}
        >
          <h2 className='item-name'> </h2>
        </li>
      </ul>
    );
  }
}

export default drinklist;
