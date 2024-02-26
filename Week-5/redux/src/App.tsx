import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Homepage from './components/pages/Homepage'
import Products from './components/pages/Products'
import Cart from './components/pages/Cart'
import Nav from './components/layout/Nav'



function App() {

  return (
    <div>
      
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </div>
     
  
  )
}

export default App
