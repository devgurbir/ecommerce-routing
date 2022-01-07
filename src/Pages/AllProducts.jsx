import {useState, useEffect} from 'react'
import Product from '../Components/Product'

const AllProducts = () => {

    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        return await fetch("http://localhost:3000/products")
        .then(res => res.json())
        .then(res => setProducts(res))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchProducts()
    }, [])
    return (
        <div style={{display: "flex", justifyContent: "space-evenly", gap:'20px', width:"90%", margin:"0 auto", flexWrap: "wrap"}}>
            {products?.map( product => <Product imageURL = {product.imageURL} name={product.title} price={product.price}
             id={product.id} key={product.id} />)}
        </div>
    )
}

export default AllProducts