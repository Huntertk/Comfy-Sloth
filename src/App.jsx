import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Layout from '../Components/Layout'
import Home from '../Pages/Home'
import Product from '../Pages/Product'
import About from '../Pages/About'
import ProductDetails from '../Pages/ProductDetails'

const App = () => {
  return (
<BrowserRouter>
  <Routes>
      <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='products' element={<Product />} />
          <Route path='products/:id' element={<ProductDetails />} />
          <Route path='about' element={<About />} />
      </Route>
  </Routes>
</BrowserRouter>
  )
}

export default App
