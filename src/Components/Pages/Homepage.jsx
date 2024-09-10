import Header from '../Header'
import Hero from '../Hero'
import Bestselling from '../Bestselling'
import OurProducts from '../OurProducts'
import ExclusiveOffer from '../ExclusiveOffer'
import Feedback from '../Feedback'
import Footer from '../Footer'
import Loader from './Loader'
import { useEffect } from 'react'

const Homepage = () => {
useEffect(()=>{
  window.addEventListener("load",()=>{
    document.getElementById("loader").style.display = "none";
  });
},[])

  return (
    <div>
        <Loader/>
        <Header/>
        <Hero/>
        <Bestselling/>
        <OurProducts/>
        <ExclusiveOffer/>
        <Feedback/>
        <Footer/>
    </div>
  )
}

export default Homepage