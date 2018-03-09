import React, { Component } from 'react';
import ProductShowPage from './ProductShowPage';
import ProductIndexPage from './ProductIndexPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductIndexPage />
        <ProductShowPage />
      </div>
    );
  }
}

export default App;
