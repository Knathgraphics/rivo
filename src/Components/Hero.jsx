import { Link } from "react-router-dom"
import heroImage from "../assets/images/heroImage.png"
import RivoButton from "./RivoButton"

const Hero = () => {


  return (
    <div className="hero">
        <div className="herocontent">
            <h1>Discover and Find your own Fashion</h1>
            <p>Explore our curated collection of Stylish Clothing and Accessories Tailored to your Unique Taste</p>
           <Link to={"/product/1"}> <RivoButton className="fillbutton" content="Explore Now"/></Link>
        </div>
       
        <div className="imgSection">
            <img className="heroImage" src={heroImage} alt="" />
        </div>

    </div>
  )
}

export default Hero