import React, { Component } from 'react';
import './Product.css';
class Product extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className='Product'>
                <div className='Product-img'>
                    <img src={this.props.product.img} />
                </div>
                <div className='Product-info'>
                    <span className='Product-name'>{this.props.product.name}</span>
                    <span className='Product-price'>${this.props.product.price}</span>
                </div>
            </div>
        )
    }
}
export default Product;