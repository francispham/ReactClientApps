import React, { Component } from 'react';

import ProductDetails from './ProductDetails';

import ReviewDetails from './ReviewDetails';

class App extends Component {
  render() {
    const product = {
      title: "React Product",
      description: 'This is a sample product',
      price: 25.99,
      created_at: "2018/03/22",
      seller: {
        full_name: "Francis Pham"
      }
    }
    const review = {
      rating: 5,
      body: 'blablablalba',
      created_at: "2018/03/22",
      reviewer: {
        full_name: "Phong Pham"
      }
    }
    return (
      <div className="App">
        <ProductDetails {...product} />
        <p><strong>For Review:</strong></p>
        <ReviewDetails {...review} />
        {/* Is the same as:
        <ProductDetails
          title={product.title}
          description={product.description}
        '(and order infor)'
        /> */}
      </div>
    );
  }
}

export default App;
