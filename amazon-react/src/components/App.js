import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ProductShowPage from './ProductShowPage';
import ProductIndexPage from './ProductIndexPage';
import ProductNewPage from './ProductNewPage';
import NavBar from './NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path="/products" component={ProductIndexPage}/>
          <Route path="/products/new" component={ProductNewPage}/>
          <Route path="/products/:id" component={ProductShowPage}/>
        </Switch>
      </div>
    </Router>);
}


export default App;
