import React, { Component } from "react";
import Filterkaffe from "./assets/img/filterkaffe.png";
import small from "./assets/icons/liten.png";
import medium from "./assets/icons/medium.png";
import large from "./assets/icons/stor.png";

export class Order extends Component {
  state = {
    itemCounter: 1,
    sizePrice: 0,
    extraPrice: 0,
    totalPrice: 0,
    smallChecked: false,
    mediumChecked: false,
    largeChecked: false,
    extra1Checked: false,
    extra2Checked: false,
    extra3Checked: false,
  };

  counterAdd = (e) => {
    this.setState({
      itemCounter: this.state.itemCounter + 1,
    });
  };

  counterSubtract = (e) => {
    this.setState({
      itemCounter: this.state.itemCounter - 1,
    });
  };

  smallChecked = (e) => {
    this.setState({
      smallChecked: true,
      mediumChecked: false,
      largeChecked: false,
      sizePrice: 29,
    });
  };

  mediumChecked = (e) => {
    this.setState({
      smallChecked: false,
      mediumChecked: true,
      largeChecked: false,
      sizePrice: 39,
    });
  };

  largeChecked = (e) => {
    this.setState({
      smallChecked: false,
      mediumChecked: false,
      largeChecked: true,
      sizePrice: 49,
    });
  };

  extra1Checked = (e) => {
    this.setState({
      extra1Checked: true,
      extra2Checked: false,
      extra3Checked: false,
      extraPrice: 5,
    });
  };

  extra2Checked = (e) => {
    this.setState({
      extra1Checked: false,
      extra2Checked: true,
      extra3Checked: false,
      extraPrice: 5,
    });
  };

  extra3Checked = (e) => {
    this.setState({
      extra1Checked: false,
      extra2Checked: false,
      extra3Checked: true,
      extraPrice: 5,
    });
  };

  totalPrice = (e) => {
    this.setState({
      totalPrice: this.state.sizePrice + this.state.extraPrice,
    });
  };

  render() {
    return (
      <div className='order-wrapper-background'>
        <div className='order-wrapper'>
          <div className='navbar-order'>
            <button className='back-btn' onClick={this.props.hideOrder}>
              X
            </button>
          </div>

          <div className='item-component-order'>
            <img className='item-img-order' src={Filterkaffe} alt='Americano' />
            <h2 className='item-name-order'>Filterkaffe</h2>
          </div>

          <div className='options'>
            <div className='options-header'>
              <h3>Velg en størrelse</h3>
            </div>

            <div className='choose-size'>
              <li className='small-size'>
                <img src={small} alt='Small' />
                <p className='item-size'>Liten 35 cl</p>
                <p className='item-price'>29,-</p>
                <div className='checkbox-wrapper'>
                  <input
                    type='checkbox'
                    id='check1'
                    checked={this.state.smallChecked}
                    hidden
                  />
                  <label
                    className='checkmark'
                    htmlFor='check1'
                    onClick={this.smallChecked}
                  ></label>
                </div>
              </li>
              <li className='medium-size'>
                <img src={medium} alt='Medium' />
                <p className='item-size'>Medium 35 cl</p>
                <p className='item-price'>39,-</p>
                <div className='checkbox-wrapper'>
                  <input
                    type='checkbox'
                    id='check2'
                    checked={this.state.mediumChecked}
                    hidden
                  />
                  <label
                    className='checkmark'
                    htmlFor='check2'
                    onClick={this.mediumChecked}
                  ></label>
                </div>
              </li>
              <li className='large-size'>
                <img src={large} alt='Large' />
                <p className='item-size'>Stor 35 cl</p>
                <p className='item-price'>49,-</p>
                <div className='checkbox-wrapper'>
                  <input
                    type='checkbox'
                    id='check3'
                    checked={this.state.largeChecked}
                    hidden
                  />
                  <label
                    className='checkmark'
                    htmlFor='check3'
                    onClick={this.largeChecked}
                  ></label>
                </div>
              </li>
            </div>

            <div className='options-header'>
              <h3>Extra</h3>
            </div>

            <div className='choose-extra'>
              <li className='milk-extra'>
                <p className='extra-name'>Melk</p>
                <p className='extra-price'>5,-</p>
                <div className='checkbox-wrapper'>
                  <input
                    type='checkbox'
                    id='check4'
                    checked={this.state.extra1Checked}
                    hidden
                  />
                  <label
                    className='checkmark'
                    htmlFor='check4'
                    onClick={this.extra1Checked}
                  ></label>
                </div>
              </li>
              <li className='milk-extra'>
                <p className='extra-name'>Soya Melk</p>
                <p className='extra-price'>5,-</p>
                <div className='checkbox-wrapper'>
                  <input
                    type='checkbox'
                    id='check5'
                    checked={this.state.extra2Checked}
                    hidden
                  />
                  <label
                    className='checkmark'
                    htmlFor='check5'
                    onClick={this.extra2Checked}
                  ></label>
                </div>
              </li>
              <li className='milk-extra'>
                <p className='extra-name'>Havremelk</p>
                <p className='extra-price'>5,-</p>
                <div className='checkbox-wrapper'>
                  <input
                    type='checkbox'
                    id='check6'
                    checked={this.state.extra3Checked}
                    hidden
                  />
                  <label
                    className='checkmark'
                    htmlFor='check6'
                    onClick={this.extra3Checked}
                  ></label>
                </div>
              </li>
            </div>
            <div className='order-footer'>
              <section className='counter-section-item'>
                <button
                  className='subtract-item'
                  onClick={this.counterSubtract}
                >
                  -
                </button>
                <p className='counter-item'>{this.state.itemCounter}</p>
                <button className='add-item' onClick={this.counterAdd}>
                  +
                </button>
              </section>
              <button className='order-item' onClick={this.props.hideOrder}>
                Legg til
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Order;
