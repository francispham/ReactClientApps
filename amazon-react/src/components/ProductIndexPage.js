import React, {Component} from 'react';
import productsData from '../data/products';
import ProductForm from './ProductForm';

class ProductIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: productsData
    };
    this.addProduct = this.addProduct.bind(this)
    this.deleteProduct = this.deleteProduct.bind(this)
  }

  addProduct (newProduct) {
    const {products} = this.state

    newProduct.seller = {full_name: 'Francis Pham'}
    this.setState({
      products: [newProduct, ...products]
    })
  }
  deleteProduct(event) {
    event.preventDefault();
    const productId = parseInt(event.currentTarget.dataset.productId, 10);
    console.log(productId)
    const newProducts = this.state.products.filter(
      product => product.id !== productId
    );
    this.setState({
      products: newProducts
    });
  }

  render() {
    // console.log(this.state.products);
    return (<div>
      <ProductForm
        onSubmit={this.addProduct}
      />
      <h2>Products</h2>
      <ul className="products-list">
        {
          this.state.products.map(product => {
            return (<li key={product.id}>
              <a href="">{product.title}</a><br />
              <strong>Seller:</strong>{' '}

              {/*
                The {' '} just ensures that there is a space put in the dom in
                between the bolded `Seller:` and the italicized seller
                full_name
              */
              }
              <em>{product.seller.full_name}</em>
              <button
                data-product-id={product.id}
                onClick = {this.deleteProduct}>Delete
              </button>
            </li>);
          })
        }
      </ul>
    </div>)
  }
}

export default ProductIndexPage;
