import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Collection extends Component {
  state = {  }
  render() {
    return (
      <div className="container column">
        <nav className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li className="is-active"><Link to="/collections/accessories" aria-current="page">Collection</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Collection;