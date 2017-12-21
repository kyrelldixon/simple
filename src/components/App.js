import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { pages } from "../pages/pages.json";

import Header from './Header';
import SideNav from './SideNav';
import Home from '../pages/home';
import Collection from '../pages/collection';
import Cart from '../pages/cart'

class App extends Component {
  state = { }
  
  render() {
    const { collections } = pages[1];
    console.log(pages);
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <section className="section">
            <div className="columns">
              <SideNav />
              <Route exact path="/" component={Home} />
              <Route exact path="/cart" component={Cart} />
              {
                collections.map(({ pathname }) =>
                  <Route key={pathname} exact path={`/collections/${pathname}`} component={Collection}/>
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
