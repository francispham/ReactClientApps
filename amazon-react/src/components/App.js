import React, {Component} from 'react';

import ProductDetails from './ProductDetails';

import ReviewList from './ReviewList';

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
    const reviews = [
      {
        body: 'I want to eat cats',
        rating: 2,
        created_at: '2018/03/24',
        reviewer: {
          full_name: 'Samantha CodeCore (no relation)'
        }
      },
      {
        body: 'This is a great product!!!',
        rating: 4,
        created_at: '2018/03/23',
        reviewer: {
          full_name: 'Erika CodeCore'
        }
      }
    ];

    return (
      <div className="App">
        <ProductDetails {...product} />
        <h2>Reviews</h2>
        <ReviewList reviews={reviews} />
      </div>
    );
  }
}

export default App;
