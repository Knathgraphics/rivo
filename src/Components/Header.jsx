import cartIcon from "../assets/images/cart.svg"
import RivoButton from "./RivoButton"
import rivoLogo from "../assets/images/logo.png"
import { useState , useEffect} from "react"
import { Link } from "react-router-dom"
import Checkout from "./Pages/Checkout"

const Header = () => {

    const [cartLength, setCartLength] = useState(0)
    
    useEffect(() => {
        if(window.localStorage.getItem("cart") !== null){
          var cartsItems = Array.from(JSON.parse(window.localStorage.getItem("cart")));
        setCartLength(cartsItems.length);
        console.log(cartsItems.length);  
        }
        else{
            setCartLength(0);
        }
        
        
   
      }, [cartLength])
    
    

  return (
    <div className="header">
        <div >
        <Link style={{ textDecoration: 'none' }} to="/"><img className="logo" src={rivoLogo} alt="" /></Link>
        </div>
        <div>
            <ul className='navlist'>
               <Link style={{ textDecoration: 'none' }} to="/"><li id="navitem">Home</li></Link>
                <li id="navitem">Shop</li>
                <li id="navitem">Features</li>
                <li id="navitem">Contact</li>
            </ul>
        </div>
        <div className="loginsection">
        <Link style={{ textDecoration: 'none' }} to="/cart"><img src={cartIcon} className="carticon" alt="" /></Link>
            <p className="itemCount">{cartLength}</p>
            <RivoButton content="Login" className="outbutton"/>
        </div>
    </div>
  )
}

export default Header