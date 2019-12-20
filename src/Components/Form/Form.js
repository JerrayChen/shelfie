import React, { Component } from 'react';
import './Form.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            id: null,
            img: '',
            name: '',
            price: 0
        }
        this.getOne = this.getOne.bind(this);
    }

    componentDidMount() {
        console.log(this.props.history.location.pathname);
        if (this.props.history.location.pathname === '/add') {

        } else {
            this.getOne(this.props.match.params.id);
        }
        // this.setState({
        //     id: this.props.product.id ? this.props.product.id : null,
        //     img: this.props.product.img || '',
        //     name: this.props.product.name || '',
        //     price: this.props.product.price || 0
        // })
    }

    // componentDidUpdate(prevProps, prevState){
    //     if (prevProps.product.id!==this.props.product.id){            
    //         this.setState({
    //             id: this.props.product.id,
    //             img: this.props.product.img,
    //             name: this.props.product.name,
    //             price: this.props.product.price
    //         })
    //     }
    // }

    getOne(id) {
        axios.get('/api/product/' + id).then(res => {
            console.log(res.data);

            this.setState({
                id: res.data[0].id,
                img: res.data[0].img,
                name: res.data[0].name,
                price: res.data[0].price
            })
        })

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
            image: this.state.img
        }
        axios.post('/api/product', body).then(res => {
            // this.props.fillForm({
            //     id: null,
            //     img: '',
            //     name: '',
            //     price: 0
            // });
            // this.props.getProduct()
        })
    }

    updateProduct() {
        let body = {
            name: this.state.name,
            price: this.state.price,
            image: this.state.img
        }
        axios.put('/api/product/' + this.state.id, body).then(res => {
            // this.props.fillForm({
            //     id: null,
            //     img: '',
            //     name: '',
            //     price: 0
            // });
            // this.props.getProduct();
        })
    }

    render() {
        return (
            <div className='Form'>
                <p className='Form-title'>Image img:</p>
                <input onChange={(e) => this.storeInput(e)} id='img' value={this.state.img} />
                <p className='Form-title'>Product Name:</p>
                <input onChange={(e) => this.storeInput(e)} id='name' value={this.state.name} />
                <p className='Form-title'>Price:</p>
                <input onChange={(e) => this.storeInput(e)} id='price' value={this.state.price} />
                <div className='Form-btns'>
                    <button onClick={() => {
                        this.setState({
                            img: '',
                            name: '',
                            price: 0
                        })
                    }} >Cancel</button>
                    {(this.props.history.location.pathname === '/add') ?
                        (<Link to='/'><button onClick={() => { this.submitForm() }} >Add to Inventory</button></Link>) :
                        (<Link to='/'><button onClick={() => { this.updateProduct() }} >Save Changes</button></Link>)
                    }
                </div>

            </div>
        )
    }
}
export default Form;