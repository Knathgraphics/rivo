import rivoLogo from "../assets/images/logowhite.svg"
import insta from "../assets/images/insta.svg"
import facebook from "../assets/images/facebook.svg"
import twitter from "../assets/images/twitter.svg"
import RivoButton from "./RivoButton"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerflex">
            <div className="logosection">
                <img src={rivoLogo} alt="" />
                <h5>Social Media</h5>
                <div className="sociallogos">
                <img src={facebook} alt="" />
                <img src={insta} alt="" />
                <img src={twitter} alt="" />
                </div>
            </div>
            <div className="shop">
                <h5>SHOP</h5>
                <ul>
                    <li>Products</li>
                    <li>Overview</li>
                    <li>Pricing</li>
                    <li>Releases</li>
                </ul>

            </div>
            <div className="company">
            <h5>COMPANY</h5>
            <ul>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>News</li>
                    <li>Support</li>
                </ul>
            </div>
            <div className="subscribe">
            <h5>STAY UP TO DATE</h5>
            <div className="inputgroup">
            <input type="text" placeholder="Enter your Email" />
            <button className="emailbutton">Submit</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer