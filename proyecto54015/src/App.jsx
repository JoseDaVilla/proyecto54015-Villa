import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './Components/NavBar/NavBar.jsx'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx'
import Contador from './Components/Contador.jsx'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer.jsx'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';


export function App(){
  return(
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/categoria/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

