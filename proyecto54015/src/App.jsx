import React from 'react'
import NavBar from './Components/NavBar/NavBar.jsx'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx'
import Cart from './Components/CartWidget/Cart.jsx'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer.jsx'
import { CartProvider } from './Components/CartWidget/CartContext';
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Checkout from './Components/Checkout/Checkout.jsx'
import ErrorBoundary from './ErrorBoundary.jsx'


export function App(){
  return(
    <BrowserRouter>
    <CartProvider>
    <ErrorBoundary>
    <NavBar/>
      <Routes>
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/categoria/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
      </ErrorBoundary>
      </CartProvider>
    </BrowserRouter>
  )
}

