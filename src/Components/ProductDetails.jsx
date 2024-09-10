import { useNavigate, useParams } from "react-router-dom"
import starIcon from "../assets/images/star.png"
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import Swal from "sweetalert2";


const ProductDetails = () => {

  const navigate = useNavigate()

  const showAlert = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      color:"#fff",
      background: "#224F34",
      icon: "success",
      title: "Item Added to Cart"
    });
  };

const [itemQuantity, setItemQuantity] = useState(1);
const [singleProduct, setSingleProduct] = useState([]);
const [caterogyArray, setcategoryArray] = useState([]);
const [loading, setLoading] = useState(true);
const [totalPrice, setTotalPrice] = useState(singleProduct.price)

const {id} = useParams();

async function getSingleProduct() {

var response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setSingleProduct(response.data);
    setTotalPrice(response.data.price); 
    getCategory(response.data.category);
    setLoading(false);
    
    
  }

async function getCategory(category) {
  var response = await axios.get("https://fakestoreapi.com/products/category/"+category);
  setcategoryArray(response.data);
}

function addItem(){
               
                var productDetails = {
                  productImage:singleProduct.image,
                  productID:id,
                  productTitle: singleProduct.title,
                  productQuantity:itemQuantity,
                  productPrice:singleProduct.price,
                  productTotal: totalPrice,
                }
                
                //window.localStorage.clear()

                if(window.localStorage.getItem("cart") == undefined || window.localStorage.getItem("cart") == null ){
                var allItems = [];
                allItems.push(productDetails);
                
                window.localStorage.setItem("cart", JSON.stringify(allItems)); 
                }
                else{
                  var cartsItems = Array.from(JSON.parse(window.localStorage.getItem("cart")));
                  cartsItems.push(productDetails);
                  window.localStorage.setItem("cart", JSON.stringify(cartsItems));
                }
                showAlert();
               setTimeout(()=>{
                navigate(0);
               },2000);
}

useEffect(()=>{
 getSingleProduct(); 
},
[])

if(loading == true){
return <div>Loading</div>
}


 else  return (
    <div>


    <div className="productDetails">
        <div className="productImage">
        <img src={singleProduct.image} alt="" />
        </div>
        <div className="productDescription">
            <h1>{singleProduct.title}</h1>
            <div className="stars">
            <img src={starIcon} alt="" />
            <img src={starIcon} alt="" />
            <img src={starIcon} alt="" />
            <img src={starIcon} alt="" />
            <h3>{singleProduct.rating.rate}</h3>
            </div>
            <p>{singleProduct.description}</p>

            <h3>${singleProduct.price}</h3>
            <h5>Quantity</h5>
            <div className="quantity">
            <button className="fillbutton" onClick={
                
                ()=>{
                    if(itemQuantity == 1){
                        return;
                    }
                setItemQuantity(itemQuantity-1);
                setTotalPrice(((singleProduct.price *(itemQuantity)) - singleProduct.price).toFixed(2));
                
                
                
                }
                            } >-</button>  



            <input type="number" id="quantity" name="" value={itemQuantity}/>
            

            <button className="fillbutton" onClick={
                
                ()=>{
                setItemQuantity(itemQuantity+1);
                setTotalPrice(((singleProduct.price *(itemQuantity)) + singleProduct.price).toFixed(2));
                }
            }>+</button>
            
            </div>

            <h2>Total: ${totalPrice}</h2>

            <button className="fillbutton" onClick={addItem}>add to cart</button>  
        </div> 
    </div>
    <div className="recommendations">
       <h2 className="center">You might also like</h2>  
       <div className='cardlist'>
          {
          caterogyArray.map((object, key)=>{

            if(object.id == id){
            return;
            }
            else{
             return <Card key={key} onClick={
                ()=>{window.location = `/product/${object.id}`}
             } width="200px" description={object.title} amount={object.price} imageUrl={object.image} rating={object.rating.rate} />    
            }
            
            })
          }
        </div>
    </div>
   
    </div>
  )
}

export default ProductDetails