import React from 'react'
import data from '../src/data'
import { Link, useParams } from 'react-router-dom'
import './product.css'

const Product = () => {
  console.log(useParams())
const renderProducts = data.map((product) => {
  return (
    <Link key={product.id} to={`${product.id}`}>
  <div  className="feature-product">
        <img className='feature-product-image' src={product.img} alt="image" />
        <div className="feature-product-details">
          <p className="feature-product-name">
            {product.name}
          </p>
          <p className="feature-product-price">
            ₹ {product.price}
          </p>
        </div>
      </div>
    </Link>
  )
})
  console.log(data)
  return (
    <div className='products-container'>
      <h1 className='product-heading'>Products</h1>
      <div className="filter-btn-container">
        <button className="filter-btn">Office</button>
        <button className="filter-btn">Living Room</button>
        <button className="filter-btn">Kitchen</button>
        <button className="filter-btn">Bedroom</button>
        <button className="filter-btn">Dining</button>
        <button className="filter-btn">Kids</button>
        <button className="filter-btn">Clear</button>
      </div>

      {renderProducts}

    </div>
  )
}

export default Product
