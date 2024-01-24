import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './Components/NavBar/NavBar.jsx'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx'
import CartWidget from './Components/CartWidget/CartWidget.jsx'
import './App.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <ItemListContainer greeting='Bienvenidos a mi E-Comerce!'/>
  </React.StrictMode>
)
