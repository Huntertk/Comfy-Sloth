import React from 'react'
import featureImageOne from '../src/assets/Images/prod-7.jpg'
import featureImageTwo from '../src/assets/Images/prod-8.jpg'
import featureImageThree from '../src/assets/Images/prod-11.jpg'
import './feature.css'

const Feature = () => {


  const featureData = [
    {
      id: 1,
      name: 'Entertainment Center',
      price: '25,999',
      img: featureImageOne
    },
    {
      id: 2,
      name: 'High-Back Bench',
      price: '5,990',
      img: featureImageTwo
    },
    {
      id: 3,
      name: 'Modern Bookshelf',
      price: '30,990',
      img: featureImageThree
    },
  ]


  const renderFeatureProduct = featureData.map((product) => {
    return  <div key={product.id} className="feature-product">
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
  })
  return (
    <div className='feature-components'>
      <h1 className="feature-heading">Featured Product</h1>
      <div className="underline"></div>
      {renderFeatureProduct}
    </div>
  )
}

export default Feature
