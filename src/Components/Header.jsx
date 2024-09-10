import cartIcon from "../assets/images/cart.svg"
import RivoButton from "./RivoButton"
import rivoLogo from "../assets/images/logo.png"
import { useState , useEffect} from "react"

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
            <img className="logo" src={rivoLogo} alt="" />
        </div>
        <div>
            <ul className='navlist'>
               <a href="/" id="navitem"><li id="navitem">Home</li></a> 
                <li id="navitem">Shop</li>
                <li id="navitem">Features</li>
                <li id="navitem">Contact</li>
            </ul>
        </div>
        <div className="loginsection">
            <a href="/cart"><img src={cartIcon} className="carticon" alt="" /></a>
            <p className="itemCount">{cartLength}</p>
            <RivoButton content="Login" className="outbutton"/>
        </div>
    </div>
  )
}

export default Header