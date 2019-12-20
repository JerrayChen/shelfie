import React, {Component} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
class Header extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className='Header'>
                <img src='./shelfie.png' />
                <h1>SHELFIE</h1>
                <div className='Header-btns'>
                    <Link to='/'><button className='Header_btn'>Dashboard</button></Link>
                    <Link to='/add'><button className='Header_btn'>Add Inventory</button></Link>
                </div>
            </div>
        )
    }
}
export default Header;