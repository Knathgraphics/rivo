import logo from "../assets/images/exclusiveimage.png"
import deleteIcon from "../assets/images/delete.svg"

const CartCard = (props) => {
  return (
    <div className="cartcard">
        <div className="image">
            <img className="cartImage" src={props.image} alt="" />
        </div>
        <div className="properties">
            <h4>{props.title}</h4>
            <div className="flex">
            <h3>${props.price}</h3>
            <h3>Quantity: {props.quantity}</h3>
            <img className="delete" src={deleteIcon} onClick={props.onClick} alt="" />
            </div>
        </div>
    </div>
  )
}

export default CartCard