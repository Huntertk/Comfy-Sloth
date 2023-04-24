import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import featureImageOne from '../src/assets/Images/prod-7.jpg'
import featureImageTwo from '../src/assets/Images/prod-8.jpg'
import featureImageThree from '../src/assets/Images/prod-11.jpg'
import './feature.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Feature = () => {
useEffect(() => {
Aos.init({duration:2000})
},[])

  return (
    <div className='feature-components'>
      <div>
      <h1 className="feature-heading">Featured Product</h1>
      <div className="underline"></div>
      </div>

    <div className="feature-product-components">

  
      <Link to="products/12">
        <div  className="feature-product" data-aos='fade-up'>
          <img className='feature-product-image' src={featureImageOne} alt="image" />
          <div className="feature-product-details">
            <p className="feature-product-name">
              Entertainment Center
            </p>
            <p className="feature-product-price">
              ₹ 54599.99
            </p>
          </div>
        </div>
      </Link>

<Link to='products/9'>

      <div  className="feature-product">
        <img className='feature-product-image' src={featureImageTwo} alt="image" />
        <div className="feature-product-details">
          <p className="feature-product-name">
            High-Back Bench
          </p>
          <p className="feature-product-price">
            ₹ 34199.99
          </p>
        </div>
      </div>
</Link>


    <Link to="products/8">

      <div className="feature-product">
        <img className='feature-product-image' src={featureImageThree} alt="image" />
        <div className="feature-product-details">
          <p className="feature-product-name">
            Modern Bookshelf
          </p>
          <p className="feature-product-price">
            ₹ 31149.99
          </p>
        </div>
      </div>
    </Link>
      </div>
    </div>
  )
}

export default Feature
