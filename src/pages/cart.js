import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Cart extends Component {
  state = {}
  render() {
    return (
      <div className="container">
        <div className="content">
          <h2>Shopping Cart</h2>
          <p>Your cart is currently empty.</p>
          <p>Continue browsing <Link to="/">here</Link></p>
        </div>
      </div>
    );
  }
}

export default Cart;