import React, { Component } from "react";

export class OrderDetails extends Component {
  render() {
    return (
      <div className='order-details-wrapper'>
        <div className='navbar-simple'>
          <button className='back-btn' onClick={this.props.showCart}>
            ←
          </button>
          <h1 className='header'>Coffee Time</h1>
        </div>

        <h2 className='page-header'>Ordredetaljer</h2>

        <ul className='order-details-ul'>
          <li className='order-details-li li-header'>
            <p className='order-details-name'>Vare</p>
            <p className='order-details-amount'>Antall</p>
            <p className='order-details-price'>Pris</p>
          </li>
          <li className='order-details-li'>
            <p className='order-details-name'>Filterkaffe</p>
            <p className='order-details-amount'>1 stk</p>
            <p className='order-details-price'>29,-</p>
          </li>
          <li className='order-details-li'>
            <p className='order-details-name'>Caramel</p>
            <p className='order-details-amount'>1 stk</p>
            <p className='order-details-price'>29,-</p>
          </li>
          <li className='order-details-li'>
            <p className='order-details-name'>Kanelbolle</p>
            <p className='order-details-amount'>1 stk</p>
            <p className='order-details-price'>29,-</p>
          </li>

          <div className='order-details-li-wrapper'>
            <li className='order-details-li'>
              <p className='order-details-name'>Total</p>
              <p className='order-details-amount'>5 stk</p>
              <p className='order-details-price'>100,-</p>
            </li>
          </div>
        </ul>
        <div className='order-details-actions-wrapper'>
          <button
            className='order-details-actions-delete-btn'
            onClick={this.props.showItemlist}
          >
            Krediter
          </button>
          <button
            className='order-details-actions-print-btn'
            onClick={this.props.showItemlist}
          >
            Skriv ut
          </button>
        </div>
      </div>
    );
  }
}

export default OrderDetails;
