import React, { Component } from "react";
import "./scss/main.css";
import Itemlist from "./components/Itemlist";
import OrderHistory from "./components/OrderHistory";
import Shoppingcart from "./components/Shoppingcart";
import OrderDetails from "./components/OrderDetails";
import Welcome from "./components/Welcome";

export class App extends Component {
  state = {
    showWelcome: true,
    showItemlist: false,
    showCart: false,
    showOrderDetails: false,
    showOrderHistory: false,
  };

  showWelcome = (e) => {
    this.setState({
      showWelcome: true,
      showItemlist: false,
      showCart: false,
      showOrderDetails: false,
      showOrderHistory: false,
    });
  };

  showItemlist = (e) => {
    this.setState({
      showItemlist: true,
      showCart: false,
      showWelcome: false,
      showOrderDetails: false,
      showOrderHistory: false,
    });
  };

  showCart = (e) => {
    this.setState({
      showCart: true,
      showItemlist: false,
      showWelcome: false,
      showOrderDetails: false,
      showOrderHistory: false,
    });
  };

  showOrderDetails = (e) => {
    this.setState({
      showOrderDetails: true,
      showCart: false,
      showItemlist: false,
      showWelcome: false,
      showOrderHistory: false,
    });
  };

  showOrderHistory = (e) => {
    this.setState({
      showOrderHistory: true,
      showOrderDetails: false,
      showCart: false,
      showItemlist: false,
      showWelcome: false,
    });
  };

  render() {
    const {
      showItemlist,
      showWelcome,
      showCart,
      showOrderDetails,
      showOrderHistory,
    } = this.state;

    return (
      <div className='App'>
        {showWelcome ? <Welcome showItemlist={this.showItemlist} /> : null}

        {showItemlist ? (
          <Itemlist
            showWelcome={this.showWelcome}
            showOrderHistory={this.showOrderHistory}
            showCart={this.showCart}
          />
        ) : null}

        {showOrderHistory ? (
          <OrderHistory
            showItemlist={this.showItemlist}
            showOrderDetails={this.showOrderDetails}
          />
        ) : null}

        {showCart ? (
          <Shoppingcart
            showWelcome={this.showWelcome}
            showOrderDetails={this.showOrderDetails}
            showItemlist={this.showItemlist}
          />
        ) : null}

        {showOrderDetails ? (
          <OrderDetails
            showItemlist={this.showItemlist}
            showCart={this.showCart}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
