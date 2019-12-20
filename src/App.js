import React, { Component } from 'react';
import './reset.css'
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      inventory:[]
    }

    this.getProduct = this.getProduct.bind(this);

  }

  componentDidMount(){
    this.getProduct();
  }

  getProduct(){
    axios.get('/api/inventory').then(res=>{
      this.setState({inventory: res.data});
    })
  }

  render(){
    return (
      <div className="App">
        <Header />
        <main className='main'>
          <Dashboard inv={this.state.inventory} />
          <Form getProduct={this.getProduct} />
        </main>
      </div>
    );
  }
}

export default App;
