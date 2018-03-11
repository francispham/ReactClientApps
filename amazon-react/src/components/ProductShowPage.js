import React, {Component} from 'react';
import ProductDetails from './ProductDetails';
import ReviewList from './ReviewList';
import ReviewDetails from './ReviewDetails';
import productData from '../data/product';

class ProductShowPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      product: productData
    }
    this.delete = this.delete.bind(this);
    this.deleteReview = this.deleteReview.bind(this);
  }

  delete() {
    this.setState({
      product: {}
    });
  }

  deleteReview (reviewId) {
    const {product} = this.state;
    const {reviews} = product;

    this.setState({
      product: {
        ...product,
        reviews: reviews.filter(review => review.id !== reviewId)
      }
    })
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
      <ReviewList
        reviews={reviews}
        onReviewDeleteClick = {this.deleteReview}
      />
    </div>)

  }
}
export default ProductShowPage;
