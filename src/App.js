import React, { Component } from 'react';
import './reset.css'
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import axios from 'axios';
import { HashRouter, Link, Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    // this.state = {
    //   inventory: [],
    //   product: {}
    // }

    
    // this.fillForm = this.fillForm.bind(this);
  }

  // fillForm(p) {
  //   this.setState({ product: p });
  // }




  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <main className='main'>
            <Switch>
              <Route component={Form} path='/edit/:id' />
              <Route component={Form} path='/add' />
              <Route component={Dashboard} exact path='/' />
            </Switch>
            {/* <Dashboard inv={this.state.inventory} 
          deleteProduct={this.deleteProduct} 
          fillForm={this.fillForm} />
          <Form getProduct={this.getProduct}
          product={this.state.product} 
          fillForm={this.fillForm} /> */}
          </main>
        </div>
      </HashRouter>
    );
  }
}

export default App;
