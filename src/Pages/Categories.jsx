import { useEffect, useState, useRef } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Product from '../Components/Product'


const Categories = () => {
    const {id} = useParams();
        
    const [categoryData, setCategoryData] = useState([])

    const fetchCategoryData = () => {
        return axios.get(`http://localhost:3000/products?categoryId=${id}`).then(res => res.data);
    }

    const handleCategoryFetch = async () => {
        const data = await fetchCategoryData()
        setCategoryData(data)
    }

    useEffect(()=>{
        handleCategoryFetch();
    }, [id])

    return (
        <div style={{display: "flex", justifyContent: "space-evenly", gap:"20px", width:"80%", margin:"0 auto", flexWrap: "wrap"}}>
            {categoryData.map( product => <Product imageURL = {product.imageURL} name={product.title} price={product.price}
             id={product.id} key={product.id} />)}
        </div>
    )
}

export default Categories