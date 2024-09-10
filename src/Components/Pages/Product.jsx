import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import ProductDetails from '../ProductDetails'

const Product = () => {
  return (
    <div>
        <Header/>
        <ProductDetails details="Print"/>
        <Footer/>
    </div>
  )
}

export default Product