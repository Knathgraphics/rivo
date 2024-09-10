import starIcon from "../assets/images/star.png"

const Card = (props) => {
  return (
    <div className="card" onClick={props.onClick}  >
            <img src={props.imageUrl} alt="" className="cardimg" /> 
            <p>{props.description}</p>
            
            <div className="price">
            <div className="productprice">
            <span style={{marginRight:"10px"}}>${props.amount}</span> | <span style={{marginLeft:"10px"}}> {props.rating} </span>
            </div>
           
            <div className="star">
            <img style={{marginLeft:"10px"}} src={starIcon} alt="" width={10}/>
            </div>
            </div>

    </div>
  )
}

export default Card