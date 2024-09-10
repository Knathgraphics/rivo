import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import ProductDetails from '../ProductDetails'
import Loader from './Loader'
import { useEffect } from 'react'

const Product = () => {

  return (
    <div>
      {/* <Loader/> */}
        <Header/>
        <ProductDetails details="Print"/>
        <Footer/>
    </div>
  )
}

export default Product