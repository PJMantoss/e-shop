import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import ProductsPage from './pages/products/ProductsPage';
import ViewCartPage from './pages/view-cart/ViewCartPage';
import './index.css'
//import Store from './components/store/Store';
import CartProvider from './components/cart/context';

ReactDOM.render(
  <HashRouter>
    <CartProvider>
      <Switch>
          <Route exact path="/" component={ProductsPage} />
          <Route path="/view-cart" component={ViewCartPage} />
      </Switch>
    </CartProvider>
  </HashRouter>,
  document.getElementById('root')
);