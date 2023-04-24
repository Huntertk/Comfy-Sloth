import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import data from '../src/data'
import './productDetails.css'

const ProductDetails = () => {
    const param = useParams()
    const productDetailsRender = data.filter((product) => {
        return product.id === Number(param.id)
    })
  return (
    <>
      <NavLink to='/products'>
        <button className='btn back-btn'>Back to All Products</button>
        </NavLink>
      <div className='product-details-container'>
        <div>

        <img className='product-details-img' src={productDetailsRender[0].img} alt="" />
        <h1 className='product-details-heading'>{productDetailsRender[0].name}</h1>
        <p className="product-details-price">₹ {productDetailsRender[0].price}</p>
        <p className="product-details-description">
          {productDetailsRender[0].description}
        </p>
        <div className="underline"></div>
        <p className="product-availiabilty">Available : <span className='product-stock'>In Stock</span></p>
        </div>
      </div>
    </>
  )
}

export default ProductDetails