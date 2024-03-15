
import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {GlobalContext} from '../../context/GlobalState';
import './Cart.css';

function Cart() {
const {cart} = useContext(GlobalContext);


  return(
    <div className='cart-container'>
    <h1>cart</h1>
      {!cart.length ? (
      <p>no item add</p>
      ) : (
      <>
      <div className='cart-list'>
        {cart.map((item) => ( 
        <div className='cart-item' key={item.id}>
        <div className='item-price'>${item.price}</div>
          <div className='item-name'>{item.name}</div>
          <div className='item-expectedDelivert'>(expected delivery 3-6 days)</div>
        </div>
        ))}
      </div>
        <Link to='/checkout'>
        <button className='item-btn'>next</button>
        </Link>
      </>
      )}
    </div>
  );
}

export default Cart;