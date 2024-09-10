import React from 'react'
import RivoButton from './RivoButton'
import exclusiveImage from "../assets/images/exclusiveimage.png"

const ExclusiveOffer = () => {
  return (
    <div className='exclusivecontainer'>
<div className="eximage">
<img src={exclusiveImage} alt=""/>
</div>
<div className="excaption">
    <h1>Exclusive Offer</h1>
    <p>Unlock the Ultimate Style upgrade with our exclusive offer, enjoy savings of up to 40% off of our latest arrivals</p>

    <RivoButton className="fillbutton" content="Buy Now"/>
</div>
    </div>
  )
}

export default ExclusiveOffer