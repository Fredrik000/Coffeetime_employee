import React, { Component } from "react";

export class Shoppingcart extends Component {
  state = {
    list: ["Filterkaffe", "Caramel", "Kanelbolle"],
    cashBackground: "#FFFFFF",
    cashColor: "#000000",
    cardBackground: "#735545",
    cardColor: "#FFFFFF",
    vippsBackground: "#FFFFFF",
    vippsColor: "#000000",
  };

  onRemoveItem = (i) => {
    this.setState((state) => {
      const list = state.list.filter((item, j) => i !== j);

      return {
        list,
      };
    });
  };

  chosenCash = (e) => {
    this.setState({
      cashBackground: "#735545",
      cashColor: "#FFFFFF",
      cardBackground: "#FFFFFF",
      cardColor: "#000000",
      vippsBackground: "#FFFFFF",
      vippsColor: "#000000",
    });
  };

  chosenCard = (e) => {
    this.setState({
      cardBackground: "#735545",
      cardColor: "#FFFFFF",
      cashBackground: "#FFFFFF",
      cashColor: "#000000",
      vippsBackground: "#FFFFFF",
      vippsColor: "#000000",
    });
  };

  chosenVipps = (e) => {
    this.setState({
      vippsBackground: "#735545",
      vippsColor: "#FFFFFF",
      cashBackground: "#FFFFFF",
      cashColor: "#000000",
      cardBackground: "#FFFFFF",
      cardColor: "#000000",
    });
  };

  render() {
    const {
      vippsBackground,
      vippsColor,
      cashBackground,
      cashColor,
      cardBackground,
      cardColor,
    } = this.state;

    return (
      <div className='shoppingcart-wrapper'>
        <div className='navbar-simple'>
          <button className='back-btn' onClick={this.props.showItemlist}>
            ←
          </button>
          <h1 className='header'>Coffee Time</h1>
        </div>

        <h2 className='page-header'>Handlekurv</h2>

        <ul className='shoppingcart-ul'>
          <li className='shoppingcart-li li-header'>
            <p className='shoppingcart-li-name'>Vare</p>
            <p className='shoppingcart-li-amount'>Antall</p>
            <p className='shoppingcart-li-price'>Pris</p>
          </li>
          {this.state.list.map((item, index) => (
            <li className='shoppingcart-li' key={item}>
              <p className='shoppingcart-li-name'>{item}</p>
              <p className='shoppingcart-li-amount'>1stk</p>
              <p className='shoppingcart-li-price'>29,-</p>
              <button
                className='shoppingcart-li-remove-btn'
                onClick={() => this.onRemoveItem(index)}
              >
                X
              </button>
            </li>
          ))}
          <div className='order-details-li-wrapper'>
            <li className='order-details-li'>
              <p className='order-details-name'>Total</p>
              <p className='order-details-amount'>3 stk</p>
              <p className='order-details-price'>87,-</p>
            </li>
          </div>
        </ul>

        <div className='shoppingcart-footer-wrapper'>
          <div className='shoppingcart-footer-pay-options'>
            <button
              className='shoppingcart-cash-btn'
              onClick={this.chosenCash}
              style={{
                backgroundColor: cashBackground,
                color: cashColor,
              }}
            >
              Kontant
            </button>
            <button
              className='shoppingcart-card-btn'
              onClick={this.chosenCard}
              style={{
                backgroundColor: cardBackground,
                color: cardColor,
              }}
            >
              Bankkort
            </button>
            <button
              className='shoppingcart-vipps-btn'
              onClick={this.chosenVipps}
              style={{
                backgroundColor: vippsBackground,
                color: vippsColor,
              }}
            >
              Vipps
            </button>
          </div>
          <div className='shoppingcart-footer-add-order-wrapper'>
            <button onClick={this.props.showOrderDetails}>
              Legg inn bestilling
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Shoppingcart;
