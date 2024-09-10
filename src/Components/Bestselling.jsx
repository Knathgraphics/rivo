import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'
import RivoButton from './RivoButton';



const Bestselling = () => {

  const [womenArray, setwomenArray] = useState([]);

  async function getWomenCLothing() {
    var response = await axios.get("https://fakestoreapi.com/products/category/jewelery");
    setwomenArray(response.data);
  }


 useEffect(()=>{
  getWomenCLothing();
 },[])

  return (
    <div className='bestselling'>
        <h1 className='center'>Best Selling Jewelries</h1>
        <p className='center'>Get on the Trend with our curated selection of best-selling styles</p>

        <div className='cardlist'>
          {
          womenArray.map((object,key)=>(
            <Card onClick={
              ()=>{window.location = `/product/${object.id}`}
           } width="200px" key={key} description={object.title} amount={object.price} imageUrl={object.image} rating={object.rating.rate} />
          ))

          }
          
         
        </div>
        <RivoButton className="outbutton" content="Explore More"/>
    </div>
  )
}

export default Bestselling