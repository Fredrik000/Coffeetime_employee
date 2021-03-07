import React, { Component } from "react";
import Drinklist from "./Drinklist";
import Dessertlist from "./Dessertlist";
import Order from "./Order";
import shoppingcartImg from "./assets/icons/handlekurv.png";

class Itemlist extends Component {
  state = {
    categoryChosen: "drinkList",
    selectedItem: false,
    dessertColor: "#FFFFFF",
    showOrder: false,
    listOpacity: "100%",
  };

  // Set state based on category
  drinkSelected = (e) => {
    this.setState({
      dessertBackgroundColor: "#735545",
      dessertBorderRadius: "0",
      dessertColor: "#FFFFFF",
      drinkColor: "#000000",
      drinkBackgroundColor: "#FFFFFF",
      drinkBorderRadius: "5px 5px 0 0",
      categoryChosen: "drinkList",
      showOrder: false,
    });
  };

  dessertSelected = (e) => {
    this.setState({
      drinkBackgroundColor: "#735545",
      drinkBorderRadius: "0",
      drinkColor: "#FFFFFF",
      dessertColor: "#000000",
      dessertBackgroundColor: "#FFFFFF",
      dessertBorderRadius: "5px 5px 0 0",
      categoryChosen: "dessertList",
    });
  };

  showOrder = (e) => {
    this.setState({
      showOrder: true,
      listOpacity: "30%",
    });
  };

  hideOrder = (e) => {
    this.setState({
      showOrder: false,
      listOpacity: "100%",
    });
  };

  render() {
    const {
      drinkBackgroundColor,
      drinkBorderRadius,
      drinkColor,
      dessertBackgroundColor,
      dessertBorderRadius,
      dessertColor,
      categoryChosen,
      showOrder,
      listOpacity,
    } = this.state;

    return (
      <div>
        <div className='item-list-wrapper'>
          <div
            className='navbar'
            style={{
              opacity: listOpacity,
            }}
          >
            <div className='header-bar-wrapper'>
              <button className='logout-btn' onClick={this.props.showWelcome}>
                Logg ut
              </button>
              <h1 className='header'>Coffee Time</h1>
              <div className='navbar-cartinfo-wrapper'>
                <p className='cart-item-counter'>3</p>
                <img
                  className='cart-icon'
                  src={shoppingcartImg}
                  alt='handlekurv'
                  onClick={this.props.showCart}
                />
              </div>
            </div>

            <div className='category-bar-wrapper'>
              <div className='category-wrapper'>
                <h2
                  className='drinks'
                  style={{
                    backgroundColor: drinkBackgroundColor,
                    borderRadius: drinkBorderRadius,
                    color: drinkColor,
                  }}
                  onClick={this.drinkSelected}
                >
                  Drikke
                </h2>
                <h2
                  className='dessert'
                  style={{
                    backgroundColor: dessertBackgroundColor,
                    borderRadius: dessertBorderRadius,
                    color: dessertColor,
                  }}
                  onClick={this.dessertSelected}
                >
                  Dessert
                </h2>
              </div>
              <button
                className='order-history-btn'
                onClick={this.props.showOrderHistory}
              >
                Ordrehistorikk
              </button>
            </div>
          </div>

          {
            /* Render list of items based on category chosen by user */
            categoryChosen === "drinkList" ? (
              showOrder === true ? (
                <div>
                  <Order
                    hideOrder={this.hideOrder}
                    showCart={this.props.showCart}
                  />
                  <Drinklist
                    showOrder={this.showOrder}
                    listOpacity={listOpacity}
                  />
                </div>
              ) : (
                <Drinklist
                  showOrder={this.showOrder}
                  listOpacity={listOpacity}
                />
              )
            ) : (
              <Dessertlist showCart={this.props.showCart} />
            )
          }
        </div>
      </div>
    );
  }
}

export default Itemlist;
