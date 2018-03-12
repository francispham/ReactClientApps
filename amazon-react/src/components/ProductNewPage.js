import React, { Component } from 'react';
import ProductForm from './ProductForm';
import { Product } from '../data/requests';

class ProductNewPage extends Component {
  constructor (props) {
    super (props);
    this.createProduct = this.createProduct.bind(this);
  }

  createProduct (productParams) {
    Product
      .create(productParams)
      .then (data => {
        const {id} =data;
        this.props.history.push(`/questions/${id}`);
      })
  }
  
  render () {
    return (
      <main
        className="ProductNewPage"
        style={{margin: '0 1rem'}}
      >
        <h1>New Product</h1>
        <ProductForm
          onSubmit={this.createProduct}
        />
      </main>
    );
  }
}

export default ProductNewPage;
