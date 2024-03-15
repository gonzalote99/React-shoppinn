import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {GlobalContext} from '../../context/GlobalState';
import './Navbar.css';

const Navbar = () => {
  const {cart} = useContext(GlobalContext);
  return(
    <div className='navbar'>
    <Link to='/'>
    <h2>shoppinn</h2>
    </Link>
    <ul className='navbar-ul'>
    <li>womens</li> 
      <li>mens</li>
      <li>clothing</li>
      <li>brands</li>
      <Link to='/cart'>
      <li>
      &#128722;{''}
        <span className='card-count' style={{color: 'red'}}>
          ({cart.length})
        </span>
      </li>
      </Link>
      <Link to='/orders'>
      <li>orders</li>
      </Link>
      <button className='nav-btn'>hi john</button>

    </ul>
    </div>
      
  );
};

export default Navbar;