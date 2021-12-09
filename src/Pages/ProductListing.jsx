import { useParams } from "react-router";
import { useState,useEffect } from "react";
import {Link} from 'react-router-dom'
import axios from "axios";

function ProductListing(){
    const {id} = useParams();
    const [productData, setProductData] = useState([])

    const fetchProductData = () => {
        return axios.get(`http://localhost:3000/products/${id}`).then(res => res.data)
    }

    const handleProductFetch = async () => {
        const data = await fetchProductData();
        setProductData(data);
    }

    

    useEffect(() => {
        handleProductFetch();
    }, [id])


    return(
        <div style={{border: "1px solid #ccc", width: "30%", padding: "20px" ,margin:"0 auto" }}>
            <img src={productData.imageURL} alt="product" />
            <h3>{productData.title}</h3>
            <p>Buy now for Rs {productData.price}</p>
            <button>Add To Cart</button>            
        </div>
    )
}

export default ProductListing