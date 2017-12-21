import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { categories } from "../pages/pages.json";

import Header from './Header';
import SideNav from './SideNav';
import Home from '../pages/home';
import Product from '../pages/product';

class App extends Component {
  state = { }
  
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <section className="section">
            <div className="columns">
              <SideNav />
              <Route exact path="/" component={Home} />
              {
                categories.slice(1).map(({ pathname }) =>
                  <Route key={pathname} exact path={pathname} component={Product}/>
                )
              }
            </div>
          </section>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
