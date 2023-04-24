import React from 'react'
import data from '../src/data'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import './product.css'

const Product = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  
  const typeFilter = searchParams.get('type')



const filterArray = typeFilter ?  data.filter((item) => {
  return item.filterName === typeFilter
}) : data

const renderProducts = filterArray.map((product) => {
  return (
    <Link key={product.id} to={`${product.id}`}>
      <div  className="feature-product">
          <img className='feature-product-image' src={product.img} alt="image" />
          <div className="feature-product-details">
            <p className="feature-product-name">
              {product.name}
            </p>
            <p className="feature-product-price">
              ₹{product.price}
            </p>
          </div>
        </div>
    </Link>
  )
})


const handleFilterChange = (key, value) => {
  setSearchParams((prev) => {
    if(value === null){
      prev.delete(key)
    } else{
      prev.set(key, value)
    }
    return prev
  })
}

  return (
    <div className='products-container'>
      <h1 className='product-heading'>Products</h1>
      <div className="underline"></div>
      <div className="filter-btn-container">
        <button 
        className={`filter-btn ${typeFilter === 'office' ? 'activateBtn' : ''}`}
        onClick={() => { handleFilterChange('type', 'office') }}
        >Office</button>
        <button
      className={`filter-btn ${typeFilter === 'living' ? 'activateBtn' : ''}`}
        onClick={() => { handleFilterChange('type', 'living') }}
        >Living Room</button>
        <button 
        className={`filter-btn ${typeFilter === 'kitchen' ? 'activateBtn' : ''}`}
        onClick={() => { handleFilterChange('type', 'kitchen') }}
        >Kitchen</button>
        <button 
        className={`filter-btn ${typeFilter === 'bedroom' ? 'activateBtn' : ''}`}
        onClick={() => { handleFilterChange('type', 'bedroom') }}
        >Bedroom</button>
        <button 
        className={`filter-btn ${typeFilter === 'dinning' ? 'activateBtn' : ''}`}
        onClick={() => { handleFilterChange('type', 'dinning') }}
        >Dining</button>
        <button 
        className={`filter-btn ${typeFilter === 'kids' ? 'activateBtn' : ''}`}
        onClick={() => { handleFilterChange('type', 'kids') }}
        >Kids</button>

        {
          typeFilter && 
          <button className="filter-btn"
          onClick={() => { handleFilterChange('type', null) }}
          >Clear</button>
        }
      </div>
      <div className="container-product">
        {renderProducts}
      </div>

    </div>
  )
}

export default Product
