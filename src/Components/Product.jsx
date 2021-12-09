import {Link} from 'react-router-dom'

function Product({name, imageURL, price, id}){
    return (
        <div style={{display:"flex", gap:"10px", border:"1px solid #ccc", maxWidth: "600px"}}>
            <div style={{display: "flex", justifyContent:"center", alignItems:"center"}}>
                <img width="70%" src={imageURL} alt="people" />
            </div>
            <div>
            <h3>{name}</h3>
            <p>Buy Now for Rs{price}</p>
            <p><Link to={`/product/${id}`}>Check out more details</Link></p>
            <button>Add To Cart</button>
            </div>
        </div>
    )
}

export default Product