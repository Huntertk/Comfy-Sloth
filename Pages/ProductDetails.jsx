import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../src/data'
const ProductDetails = () => {
    const param = useParams()
    console.log(param)
    const productDetailsRender = data.filter((product) => {
        return product.id === Number(param.id)
    })
    console.log(productDetailsRender)
  return (
    <div>
      ProductDetails
    </div>
  )
}

export default ProductDetails