import React, { Component } from 'react';
import { categories } from '../pages/pages.json';
import { Link } from 'react-router-dom';

class SideNav extends Component {
  state = {  }
  render() {
    return (
      <div className="column is-one-fifth">
        <aside className="menu">
          <p className="menu-label">
            Collections
          </p>
          <ul className="menu-list">
            { categories.map( ({ title, pathname }) => 
              <li key={title}><Link to={`/collections/${pathname}`}> {title} </Link></li>
            )}
          </ul>
        </aside>
      </div>
    );
  }
}

export default SideNav;