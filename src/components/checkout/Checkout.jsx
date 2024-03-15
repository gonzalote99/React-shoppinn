import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {GlobalContext} from '../../context/GlobalState';
import './Checkout.css';

const Checkout = () => {
  const {cart, orders, addItemToOrderList, clearCart} = useContext(GlobalContext);
  const {discount, extraFees, tax} = {discount: 20, extraFees: 99, tax: 5};
  const subTotal = Math.floor(cart?.reduce((sum, curr) => sum + curr.price, 0));
  const total = Math.floor(subTotal + 99 + 5 - (subTotal + 99 + 5 ) * 0.2);
  const [isOrdered, setIsOrdered] = useState(false);
  const handlePay = () => {
    addItemToOrderList({
      orderId : orders.length + 1,
      buyerId: 1,
      items: [...cart],
      price: total,
      address: '7 rusk court',
      deliveryDate: '11/01/32',
      isDelivered: false,
    });
    clearCart();
    setIsOrdered(true);
  };

  return(
    <div className='checkout-container'>
      {isOrdered ? (
      <h3>
      order placed successfully <Link to='/'>shop more</Link>
      </h3>
      ) : (
      <>
      <div>
      <div className='custom-row'>
      <h4>order review</h4>
        <span>{cart?.length} items in cart</span>
      </div>
        <div className='custom-row'>
        <h4>cupons</h4>
          <span>not available</span>
        </div>
        <div className='custom-row'>
        <h4>checkout summary</h4>
          <div className='checkout-summary'>
          <span>subtotal</span>
            <span>${subTotal}</span>
          </div>
          <div className='checkout-summary'>
          <span>discount</span>
            <span>{discount}%</span>
          </div>
          <div className='checkout-summary'>
          <span>extra fee</span>
            <span>${extraFees}</span>
          </div>
          <div className='checkout-summary'>
          <span>tax</span>
            <span>${tax}</span>
          </div>
          
        </div>
        <div className='checkout-summary'>
        <h4>total</h4>
          <span>${total}</span>
        </div>
        
      </div>
        <button className='item-btn' onClick={handlePay}>
        pay ${total}
        </button>
      </>
      )}
    </div>
  )
}

export default Checkout;