import heroImage from "../assets/images/heroImage.png"
import RivoButton from "./RivoButton"

const Hero = () => {

function openProduct (id){
  window.location = `/product/${id}`;
}

  return (
    <div className="hero">
        <div className="herocontent">
            <h1>Discover and Find your own Fashion</h1>
            <p>Explore our curated collection of Stylish Clothing and Accessories Tailored to your Unique Taste</p>
            <RivoButton className="fillbutton" onClick={()=>{
              openProduct(1);
            }} content="Explore Now"/>
        </div>
       
        <div className="imgSection">
            <img className="heroImage" src={heroImage} alt="" />
        </div>

    </div>
  )
}

export default Hero