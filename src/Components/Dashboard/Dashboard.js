import React, {Component} from 'react';
import './Dashboard.css';
import Product from '../Product/Product';
import axios from 'axios';
class Dashboard extends Component{
    constructor(){
        super();
        this.state = {
            inventory: []
          }
          this.deleteProduct = this.deleteProduct.bind(this);
    }

    getProduct() {
        axios.get('/api/inventory').then(res => {
          this.setState({ inventory: res.data });
        }).catch(err => { console.log(err); });
      }

      deleteProduct(id) {
        axios.delete('/api/product/' + id).then(res => {
          this.setState({ inventory: res.data });
        }).catch(err => { console.log(err); });
      }

      componentDidMount() {
        this.getProduct();
      }


    render(){
        let list = this.state.inventory.map((e,i)=>{
            return (<Product 
                deleteProduct={this.deleteProduct} 
                key={i} product={e}/>)
        });
        return (
            <div className='Dashboard'>
                {list}
            </div>
        )
    }
}
export default Dashboard;