import React, {useContext, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import './ItemDetail.css';
import items from '../../mockData/items.json';
import {GlobalContext} from '../../context/GlobalState';


const getItemDetail = (id) => items.filter((item) => item.id == id)[0];

function ItemDetail() {
  const params = useParams();
  const itemId = parseInt(params?.id);
  const item = !!itemId && getItemDetail(itemId);
  const {addItemToCartList, cart} = useContext(GlobalContext);
  const [isAdded, setIsAdded] = useState(cart.findIndex((c) =>  c.id === itemId) > -1
  );

  return(
    <div className='item-detail-container'>
    <Link to='/'> &#8592; back</Link>
      <div className='item-detail'>
      <div className='item-detail-image'>
      <img src={item.img} alt={'Item image'} />
      </div>
        <div className='item-detail-info'>
        <div className='item-brand' style={{margin: '0px 10px'}} >{item.brand}</div>
        </div>
        <div className='item-name'>{item.name}</div>
        <div className='item-price'>${item.price}</div>
        <select className='item-size'>
        <option value={"S"}>select size (S)</option>        
          <option value={"M"}>select size (M)</option>
          <option value={"L"}>select size (L)</option>
          <option value={"XL"}>select size (XL)</option>

        </select>
        <button 
          className='item-btn' disabled={isAdded} onClick={() => { addItemToCartList(item);
            setIsAdded(true);
                                                                 }}
          >{isAdded ? <Link to='/cart'>go to cart</Link> : 'Add to bag'}</button>
        <p className='item-description'>lorem ipsum</p>
      </div>
    </div>
  );
}

export default ItemDetail;
