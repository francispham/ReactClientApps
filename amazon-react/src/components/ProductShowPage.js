import React, {Component} from 'react';
import ProductDetails from './ProductDetails';
import ReviewList from './ReviewList';

import productData from '../data/product';

class ProductShowPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      product: productData
    }
  }

  render() {
    const {
      reviews,
      ...product
    } = this.state.product;
    // const reviews = this.state.product.reviews;
    // const product = {
    //   title: this.state.product.title,
    //   description: this.state.product.description,
    //   price: this.state.product.price,
    //   seller: this.state.product.seller,
    //   created_at: this.state.product.created_at
    // };
    return (<div>
      <ProductDetails {...product}/>
      <h2>Reviews</h2>
      <ReviewList reviews={reviews}/>
    </div>)

  }
}
export default ProductShowPage;
