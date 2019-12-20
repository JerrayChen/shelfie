import React, { Component } from 'react';
import './Product.css';
import {Link} from 'react-router-dom';
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
                <div className='Product-btns'>
                    <button className='Product_btn' onClick={()=>{this.props.deleteProduct(this.props.product.id)}}>Delete</button>
                    <Link to={'/edit/'+this.props.product.id}><button className='Product_btn'>Edit</button></Link>
                </div>
            </div>
        )
    }
}
export default Product;