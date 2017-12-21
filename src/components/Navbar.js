import React, { Component } from 'react';

class Navbar extends Component {
  state = { onMobile: false }
  render() {
    return (
      <nav className="navbar is-transparent" aria-label="main navigation">
        <div className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item">
              <i className="fa fa-search fa-lg" aria-hidden="true"></i>
            </div>
            <div className="control navbar-item">
              <input className="input" type="text" placeholder="Search"/>
            </div>
          </div>
          <div className="navbar-end">
            <a href="#" className="navbar-item">
              <span className="icon">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </span>
              <span>Cart(0)</span>
            </a>
            <a href="#" className="navbar-item">
              Check Out
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;