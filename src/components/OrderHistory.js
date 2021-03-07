import React, { Component } from "react";

export class OrderHistory extends Component {
  render() {
    return (
      <div className='order-history-wrapper'>
        <div className='navbar-simple'>
          <button className='back-btn' onClick={this.props.showItemlist}>
            ←
          </button>
          <h1 className='header'>Coffee Time</h1>
        </div>

        <h2 className='page-header'>Ordehistorikk</h2>

        <ul className='order-history-ul'>
          <li className='order-history-li li-header'>
            <p className='order-history-number'>Ordrenummer</p>
            <p className='order-history-date'>Dato/tid</p>
            <p className='order-history-price'>Pris</p>
            <button></button>
          </li>
          <li className='order-history-li'>
            <p className='order-history-number'>1</p>
            <p className='order-history-date'>03.11.2020</p>
            <p className='order-history-price'>29</p>
            <button
              className='order-history-info-btn'
              onClick={this.props.showOrderDetails}
            >
              Se mer
            </button>
          </li>
          <li className='order-history-li'>
            <p className='order-history-number'>2</p>
            <p className='order-history-date'>03.11.2020</p>
            <p className='order-history-price'>34</p>
            <button
              className='order-history-info-btn'
              onClick={this.props.showOrderDetails}
            >
              Se mer
            </button>
          </li>
          <li className='order-history-li'>
            <p className='order-history-number'>3</p>
            <p className='order-history-date'>03.11.2020</p>
            <p className='order-history-price'>44</p>
            <button
              className='order-history-info-btn'
              onClick={this.props.showOrderDetails}
            >
              Se mer
            </button>
          </li>
          <li className='order-history-li'>
            <p className='order-history-number'>4</p>
            <p className='order-history-date'>03.11.2020</p>
            <p className='order-history-price'>39</p>
            <button
              className='order-history-info-btn'
              onClick={this.props.showOrderDetails}
            >
              Se mer
            </button>
          </li>
          <li className='order-history-li'>
            <p className='order-history-number'>5</p>
            <p className='order-history-date'>03.11.2020</p>
            <p className='order-history-price'>48</p>
            <button
              className='order-history-info-btn'
              onClick={this.props.showOrderDetails}
            >
              Se mer
            </button>
          </li>
          <li className='order-history-li'>
            <p className='order-history-number'>6</p>
            <p className='order-history-date'>03.11.2020</p>
            <p className='order-history-price'>54</p>
            <button
              className='order-history-info-btn'
              onClick={this.props.showOrderDetails}
            >
              Se mer
            </button>
          </li>
          <li className='order-history-li'>
            <p className='order-history-number'>7</p>
            <p className='order-history-date'>03.11.2020</p>
            <p className='order-history-price'>29</p>
            <button
              className='order-history-info-btn'
              onClick={this.props.showOrderDetails}
            >
              Se mer
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default OrderHistory;
