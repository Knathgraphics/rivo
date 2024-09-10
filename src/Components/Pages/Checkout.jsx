import React, { useEffect, useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import CartCard from '../CartCard'
import emptycart from "../../assets/images/emptycart.png"
import Loader from './Loader'

function flutterCheckout(totalcost){
  FlutterwaveCheckout({
    public_key: "FLWPUBK_TEST-02b9b5fc6406bd4a41c3ff141cc45e93-X",
    tx_ref: "txref-DI0NzMx13",
    amount: totalcost,
    currency: "USD",
    payment_options: "card, banktransfer, ussd",
    meta: {
      source: "docs-inline-test",
      consumer_mac: "92a3-912ba-1192a",
    },
    customer: {
      email: "test@mailinator.com",
      phone_number: "08100000000",
      name: "Ayomide Jimi-Oni",
    },
    customizations: {
      title: "RIVO",
      description: "Test Payment",
      logo: "src/assets/images/logo.png",
    },
    callback: function (data){
      //console.log("payment callback:", data);
    },
    onclose: function() {
      //console.log("Payment cancelled!");
    }
  });
}

function deleteItem(array,id){
var newCart = array.filter(item => item.productID !== id);
if(array.length == 0){
  localStorage.clear();
  window.location = window.location.href;
}
else{
  localStorage.setItem("cart", JSON.stringify(newCart));
  window.location = window.location.href;

}

}


const Checkout = () => {
  const [cartLength, setCartLength] = useState(0);
  const [cartItems, setCartIems] = useState([]);
  const [loadedCart, setLoadedCart] = useState(false);
  const [totalCost, setTotalCost] = useState(0);
    


useEffect(() => {
var localCost = 0 ;  

  if(window.localStorage.getItem("cart") !== null){
     var getcartItems = Array.from(JSON.parse(window.localStorage.getItem("cart")));
  setCartLength(getcartItems.length);
  setCartIems(Array.from(JSON.parse(window.localStorage.getItem("cart"))));
  setLoadedCart(true);
  
  getcartItems.forEach((item)=>{
    localCost += (item.productPrice *item.productQuantity);
    setTotalCost(localCost);
  });
  }
  window.addEventListener("load",()=>{
    document.getElementById("loader").style.display = "none";
  });
}, [])



if(loadedCart == false){
  return (<div>Loading</div>)
}
  return (
    <div>
      {/* <Loader/> */}
        <Header/>
        <div className="cartSection">
          <div className="noCart">
            <div className="error" style={{display:cartLength==0? 'block': "none"}}>
              <img src={emptycart} className='emptycart' alt="" />
              <h1 className='center'>Your cart is empty 😢<br /></h1>
            <h4 className='center'>Maybe it’s time for a shopping spree?</h4>
            </div>

            <div className="checkout">
            <div className="error" style={{display:cartLength==0? 'none': "block"}}>
            <h1 className='items'>Items in your Cart</h1>
            <div className='cartorderbox'>
            <div className="cartlist">
              
              {
                cartItems.map((item, key)=>(
                 <CartCard key={key} onClick={()=>{
                  deleteItem(cartItems,item.productID);
                 }} price={item.productPrice} quantity={item.productQuantity}  image={item.productImage} title={item.productTitle} /> 
                ))    
              }
            
  </div>
              <div className="ordersummary">
                <h5>Order Summary</h5>
                <div className="flex">
              <h3>Cart Subtotal</h3>
              <h3>${totalCost.toFixed(2)}</h3>
              </div>
              <hr />
              <div className="flex">
              <h3>Estimated Subtotal</h3>
              <h3>${totalCost.toFixed(2)}</h3>
              </div>
  <button className="checkoutbtn" onClick={()=>{
    flutterCheckout(totalCost.toFixed(2));
  }}>
    Proceed to Checkout
  </button>

  
  <br />
  <a href="/" className='continueshopping '>or Continue Shopping</a>
              </div>
            </div>
             

            
            </div>
        </div>

        </div>  
        </div>
        
        <Footer/>
    </div>
  )
}

export default Checkout