import React, { Component } from 'react';
import './Form.css';
import axios from 'axios';
class Form extends Component {
    constructor() {
        super();
        this.state = {
            url: '',
            name: '',
            price: 0
        }
    }

    storeInput(e) {
        let valueObj = {};
        valueObj[e.target.id] = e.target.id === 'price' ? parseInt(e.target.value) : e.target.value;
        this.setState(valueObj);
    }

    submitForm() {
        let body = {
            name: this.state.name,
            price: this.state.price,
            image: this.state.url
        }
        axios.post('/api/product', body).then(res => {
            this.setState({
                url: '',
                name: '',
                price: 0
            });
            this.props.getProduct()
        })
    }

    render() {
        return (
            <div className='Form'>
                <p className='Form-title'>Image URL:</p>
                <input onChange={(e) => this.storeInput(e)} id='url' value={this.state.url} />
                <p className='Form-title'>Product Name:</p>
                <input onChange={(e) => this.storeInput(e)} id='name' value={this.state.name} />
                <p className='Form-title'>Price:</p>
                <input onChange={(e) => this.storeInput(e)} id='price' value={this.state.price} />
                <div className='Form-btns'>
                    <button onClick={() => {
                        this.setState({
                            url: '',
                            name: '',
                            price: 0
                        })
                    }} >Cancel</button>
                    <button onClick={() => { this.submitForm() }} >Add to Inventory</button>
                </div>

            </div>
        )
    }
}
export default Form;