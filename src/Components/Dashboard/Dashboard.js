import React, {Component} from 'react';
import './Dashboard.css';
import Product from '../Product/Product';
class Dashboard extends Component{
    constructor(){
        super();
    }
    render(){
        let list = this.props.inv.map((e,i)=>{
            return (<Product key={i} product={e}/>)
        });
        return (
            <div className='Dashboard'>
                {list}
            </div>
        )
    }
}
export default Dashboard;