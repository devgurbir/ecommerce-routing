function Product({name, price, id}){
    return (
        <div>
            <h3>{name}</h3>
            <p>Buy Now for Rs{price}</p>
            <button>Add To Cart</button>
        </div>
    )
}

export default Product