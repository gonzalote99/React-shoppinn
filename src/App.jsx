import './App.css';

import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar'
import ItemDetail from './components/itemDetail/ItemDetail';
import Cart from './components/cart/Cart';
import Orders from './components/orders/Orders';
import Checkout from './components/checkout/Checkout';
import HomePage from './components/home/HomePage';

function App() {
  return(
    <div className='App'>
      <BrowserRouter>
      <div>
        <Navbar />
       
      </div>
        <Routes>
        <Route path='/item/:id' element={<ItemDetail />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;