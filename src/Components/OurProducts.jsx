import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Cateories = ["jewelery", "men's clothing", "women's clothing"];

const OurProducts = () => {

  const [caterogyArray, setcategoryArray] = useState([]);

  async function getCategory(category) {
    var response = await axios.get("https://fakestoreapi.com/products/category/"+category);
    console.log(response.data);
    
    setcategoryArray(response.data);
  }

  async function defaultCategory() {
    var response = await axios.get("https://fakestoreapi.com/products/category/"+Cateories[2]);
    console.log(response.data);
    setcategoryArray(response.data);
  }


 useEffect(()=>{

 defaultCategory();
 },[])

  return (
    <div className='bestselling'> 
        <h1 className='center'>Our Products</h1>
            <ul className='category'>
                <li onClick={()=>{getCategory(Cateories[0])}} className='categoryitem'>Jewelry</li>
                <li onClick={()=>{getCategory(Cateories[1])}} className='categoryitem'>Men Clothing</li>
                <li onClick={()=>{getCategory(Cateories[2])}} className='categoryitem'>Women Clothing</li>
            </ul>
       

        <div className='cardlist'>
          {
          caterogyArray.map((object, key)=>(
            <Link key={key} style={{ textDecoration: 'none', color:"#224F34" }} to={`/product/${object.id}`}><Card  description={object.title} amount={object.price} imageUrl={object.image} rating={object.rating.rate} /></Link>
          ))
          }
        </div>
    </div>
  )
}

export default OurProducts