import React from 'react';
import ProductDetails from './ProductDetails';
import ReviewList from './ReviewList';

import product from '../data/product';

function ProductShowPage(props) {
  const {
    reviews, ...productDetails
  } = product;
  return (<div>
    <ProductDetails {...productDetails}/>
    <h2>Reviews</h2>
    <ReviewList reviews={reviews}/>
  </div>)
}

export default ProductShowPage;
